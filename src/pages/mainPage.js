import { test } from '@playwright/test';

export class MainPage {
    constructor(page) {
        this.page = page;
        this.mainBanner = page.locator("div[class='banner']");
        this.mainPopularTags = page.locator("div[class='tag-list']").locator("button");
        this.mainDefaultFilterTab = page.locator("div[class='feed-toggle']").locator("button").first();
        this.mainSelectedFilterTab = page.locator("div[class='feed-toggle']").locator("button").last();
    };

    async openMainPage() {
        return test.step("Открытие главной страницы", async () => {
            await this.page.goto("https://realworld.qa.guru/");
        });
    };

    async tagButtonClick() {
        return test.step("Клик на первый тег", async () => {
            await this.mainPopularTags.first().click();
        });
    };

    async getTagButtonText() {
        return test.step("Сохранение текста кнопки тега", async () => {
            const tagButtonText = await this.mainPopularTags.first().innerText();
            return tagButtonText;
        });
    };
};