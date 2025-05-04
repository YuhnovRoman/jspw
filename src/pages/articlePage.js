import { expect } from "@playwright/test";

export class ArticlePage {
    constructor(page) {
        this.page = page;
        this.articleTitle = page.locator("h1");
        this.articleBanner = page.locator("div[class='banner']");
        this.articleAuthorBannerImg = this.articleBanner.locator("img");
        this.articleBannerInfo = this.articleBanner.locator("div[class='info']");
        this.articleAuthorBannerFollowButton = this.articleBanner.locator("button").filter({ hasText: "Followers" });
        this.articleAuthorBannerFavoriteButton = this.articleBanner.locator("button").filter({ hasText: "Favorite" });
        this.articleContent = page.locator("div[class='col-md-12']");
        this.articleContentText = page.locator("div[class='col-md-12']").locator("p").first();
        this.articleContentTag = this.articleContent.locator("div[class='tag-list']");
        this.articleActions = page.locator("div[class='article-actions']");
        this.articleActionsImg = this.articleActions.locator("img");
        this.articleActionsInfo = this.articleActions.locator("div[class='info']");
        this.articleActionsFollowButton = this.articleActions.locator("button").filter({ hasText: "Followers" });
        this.articleActionsInfoFavoriteButton = this.articleActions.locator("button").filter({ hasText: "Favorite" });
        this.articleCommentBlock = page.locator("div[class='row']");
    }

    async openArticlePage(comment = "with comments" | "no comments") {
        switch (comment) {
            case "with comments":
                await this.page.goto("https://realworld.qa.guru/#/article/akva-explicabo-terra-");
                break;
            default:
                await this.page.goto("https://realworld.qa.guru/#/article/akva-vinitor-sperno-");
                break;
        };
    };

    async checkArticleBanner() {
        await expect(this.articleAuthorBannerImg).toBeVisible();
        await expect(this.articleBannerInfo).toBeVisible();
        await expect(this.articleAuthorBannerFollowButton).toBeVisible();
        await expect(this.articleAuthorBannerFavoriteButton).toBeVisible();
    };

    async checkArticleContent() {
        const articleText = await this.articleContentText.innerText();
        const articleTextLength = articleText.length;
        // Проверка, что статья не пустая и там есть текст
        await expect(async () => {
            expect(articleTextLength).toBeGreaterThan(0);
        }).toPass();
    };

    async checkArticleActions() {
        await expect(this.articleActionsImg).toBeVisible();
        await expect(this.articleActionsInfo).toBeVisible();
        await expect(this.articleActionsFollowButton).toBeVisible();
        await expect(this.articleActionsInfoFavoriteButton).toBeVisible();
    }

    async checkArticleEmptyCommentBlock() {
        await expect(this.articleCommentBlock).toContainText("There are no comments yet...")
    }
};