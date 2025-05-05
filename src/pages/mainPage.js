import { expect } from "@playwright/test";

export class MainPage{
    constructor(page) {
        this.page = page;
        this.mainBanner = page.locator("div[class='banner']");
        this.mainPopularTags = page.locator("div[class='tag-list']").locator("button");
        this.mainDefaultFilterTab = page.locator("div[class='feed-toggle']").locator("button").first();
        this.mainSelectedFilterTab = page.locator("div[class='feed-toggle']").locator("button").last();
    }

    async openMainPage() {
       await this.page.goto("https://realworld.qa.guru/");
    };

    async checkMainContent() {
        await expect(this.mainBanner).toBeVisible();
        await expect(this.mainPopularTags).toHaveCount(50);
    };

    async checkFiltrationArticles() {
        await expect(this.mainDefaultFilterTab).toContainText("Global Feed");
        await expect(this.mainPopularTags.first()).toBeVisible();

        for(const tagButton of await this.mainPopularTags.all()) {
            const tagButtonText = await tagButton.innerText();
            await tagButton.click();
            await expect(this.mainSelectedFilterTab).toContainText(tagButtonText);
        };
    };
};