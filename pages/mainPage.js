import { expect } from "@playwright/test";

export class MainPage{
    constructor(page) {
        this.page = page;
        this.mainBanner = page.locator("div[class='banner']");
        this.mainPopularTags = page.locator("div[class='tag-list']").locator("button");
    }

    async openMainPage() {
       await this.page.goto("https://realworld.qa.guru/");
    };

    async checkMainContent() {
        await expect(this.mainBanner).toBeVisible();
        await expect(this.mainPopularTags).toHaveCount(50);
    };
}