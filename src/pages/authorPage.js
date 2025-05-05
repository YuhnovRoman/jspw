import { expect } from "@playwright/test";

export class AuthorPage {
    constructor(page) {
        this.page = page;
        this.authorImg = page.locator("img[class='user-img']");
        this.authorName = page.locator("h4");
        this.authorFollowersButton = page.getByRole("button").filter({ hasText: "Followers"});
        this.authorArticle = page.locator("li[class='nav-item']").filter({hasText: "My Articles"});
        this.authorFavoriteArticle = page.locator("li[class='nav-item']").filter({hasText: "Favorited Articles"});
        this.authorEmptyState = page.getByRole("main");
    };

    async openAuthorPage () {
        await this.page.goto("https://realworld.qa.guru/#/profile/Keaton");
    };

    async checkUserInfo() {
        await expect(this.authorImg).toBeVisible();
        await expect(this.authorName).toBeVisible();
        await expect(this.authorFollowersButton).toBeVisible();
    }; 

    async checkAuthorTabPanel() {
        await expect(this.authorArticle).toBeVisible();
        await expect(this.authorFavoriteArticle).toBeVisible();
        await this.authorFavoriteArticle.click();
        await expect(this.authorEmptyState).toContainText("Keaton doesn\'t have favorites.");
    };
}