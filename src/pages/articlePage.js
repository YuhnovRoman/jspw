export class ArticlePage {
    constructor(page) {
        this.page = page;
        this.articleTitle = page.locator("h1");
        this.articleBanner = page.locator("div[class='banner']");
        this.articleAuthorBannerImg = this.articleBanner.locator("img");
        this.articleBannerInfo = this.articleBanner.locator("div[class='info']");
        this.articleAuthorBannerFollowButton = this.articleBanner.locator("button").filter({ hasText: /Follow/ });
        this.articleAuthorBannerUnfollowButton = this.articleBanner.locator("button").filter({ hasText: /Unfollow/ });
        this.articleAuthorBannerFavoriteButton = this.articleBanner.locator("button").filter({ hasText: "Favorite" });
        this.articleContent = page.locator("div[class='col-md-12']");
        this.articleContentText = page.locator("div[class='col-md-12']").locator("p").first();
        this.articleContentTag = this.articleContent.locator("div[class='tag-list']");
        this.articleActions = page.locator("div[class='article-actions']");
        this.articleActionsImg = this.articleActions.locator("img");
        this.articleActionsInfo = this.articleActions.locator("div[class='info']");
        this.articleActionsFollowButton = this.articleActions.locator("button").filter({ hasText: /Follow/ });
        this.articleActionsUnfollowButton = this.articleActions.locator("button").filter({ hasText: /Unfollow/ });
        this.articleActionsInfoFavoriteButton = this.articleActions.locator("button").filter({ hasText: "Favorite" });
        this.articleCommentBlock = page.locator("div[class='row']");
    };

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

    async getArticleTextLength() {
        const articleText = await this.articleContentText.innerText();
        const articleTextLength = articleText.length;
        return articleTextLength;
    };

    async followAuthorClick() {
        await this.articleAuthorBannerFollowButton.click();
    };

    async unFollowAuthorClick() {
        await this.articleActionsUnfollowButton.click();
    };

    async getFavoriteButtonText() {
        let favoriteButtonText = await this.articleAuthorBannerFavoriteButton.innerText();
        return favoriteButtonText;
    };

    async favoriteButtonClick() {
        await this.articleAuthorBannerFavoriteButton.click();
    };
};