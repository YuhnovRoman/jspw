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
    
    async favoriteArticleClick() {
        await this.authorFavoriteArticle.click();
    };
};