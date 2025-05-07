export class MainPage {
    constructor(page) {
        this.page = page;
        this.mainBanner = page.locator("div[class='banner']");
        this.mainPopularTags = page.locator("div[class='tag-list']").locator("button");
        this.mainDefaultFilterTab = page.locator("div[class='feed-toggle']").locator("button").first();
        this.mainSelectedFilterTab = page.locator("div[class='feed-toggle']").locator("button").last();
    };

    async openMainPage() {
        await this.page.goto("https://realworld.qa.guru/");
    };

    async tagButtonClick() {
        await this.mainPopularTags.first().click();
    };

    async getTagButtonText() {
        const tagButtonText = await this.mainPopularTags.first().innerText();
        return tagButtonText;
    };
};