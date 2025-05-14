import { test } from '@playwright/test';

export class ArticlePage {
    constructor(page) {
        this.page = page;
        this.newArticleLink = page.getByRole("link", { name: "New Article" });
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
        this.articleTitleInput = page.getByRole("textbox", { name: "Article Title" });
        this.articleAboutInfoInput = page.getByRole("textbox", { name: "What\'s this article about?" });
        this.articleTextInput = page.getByRole("textbox", { name: "Write your article (in" });
        this.articleTagInput = page.getByRole("textbox", { name: "Enter tags" });
        this.articlePublishButton = page.getByRole("button", { name: "Publish Article" });
    };

    async openArticlePage(comment = "with comments" | "no comments") {
        return test.step("Открытие страницы статьи", async () => {
            switch (comment) {
                case "with comments":
                    await this.page.goto("https://realworld.qa.guru/#/article/akva-explicabo-terra-");
                    break;
                default:
                    await this.page.goto("https://realworld.qa.guru/#/article/akva-vinitor-sperno-");
                    break;
            };
        });
    };

    async followAuthorClick() {
        return test.step("Клик кнопки подписки на автора статьи", async () => {
            await this.articleAuthorBannerFollowButton.click();
        });
    };

    async unFollowAuthorClick() {
        return test.step("Клики кнопки отписки от автора статьи", async () => {
            await this.articleActionsUnfollowButton.click();
        });
    };

    async getFavoriteButtonText() {
        return test.step("Сохранение текста кнопки добавления статьи в избранное", async () => {
            let favoriteButtonText = await this.articleAuthorBannerFavoriteButton.innerText();
            return favoriteButtonText;
        });
    };

    async favoriteButtonClick() {
        return test.step("Клик кнопки добавление статьи в избранное", async () => {
            await this.articleAuthorBannerFavoriteButton.click();
        });
    };

    async createNewArticle(randomArticle) {
        return test.step("Создание случайной статьи", async () => {
            const { title, aboutInfo, content, tag } = randomArticle;
            await this.newArticleLink.click();
            await this.articleTitleInput.fill(title);
            await this.articleAboutInfoInput.fill(aboutInfo);
            await this.articleTextInput.fill(content);
            await this.articleTagInput.fill(tag);
            await this.articlePublishButton.click();
        });
    };
};