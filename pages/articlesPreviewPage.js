import { expect } from "@playwright/test";

export class ArticlesPreviewPage {
    constructor(page) {
        this.page = page;
        this.articleWrapper = page.locator("div[class='article-preview']");
        this.articlePreviewInfo = this.articleWrapper.locator("div[class='info']");
        this.articlePreviewTitle = this.articleWrapper.locator("h1");
        this.articlePreviewText = this.articleWrapper.locator("p");
        this.articlePreviewLike = this.articleWrapper.locator("span[class='counter']");
        this.articlePreviewTags = this.articleWrapper.locator("ul[class='tag-list']");     
    }

    // Проверка, что у каждой статьи есть блок с автором и датой, заголовок, текст, лайки, теги.
    async checkArticlePreview() {
        await expect(this.articleWrapper).toHaveCount(3);

        const articlesCount = await this.articleWrapper.count();

        for(let i = 0; i < articlesCount; i++) {
            await expect(this.articlePreviewInfo.nth(i)).toBeVisible();
            await expect(this.articlePreviewTitle.nth(i)).toBeVisible();
            await expect(this.articlePreviewText.nth(i)).toBeVisible();
            await expect(this.articlePreviewLike.nth(i)).toBeVisible();
            await expect(this.articlePreviewTags.nth(i)).toBeVisible();
        };
    };
}