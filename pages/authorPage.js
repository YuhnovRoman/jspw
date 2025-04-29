import { expect } from "@playwright/test";

export class AuthorPage {
    constructor(page) {
        this.page = page;
        this.authorName = page.getByText('Marjolaine');
        this.authorProfileAvatar = page.getByRole('img', { name: 'Marjolaine' }).first();
        this.authorArticles = page.getByText('My Articles Favorited ArticlesMarjolaineApril 29, 2025 ( 0 )claudeo aliuspax');
    }

    async checkNavigateToAuthor () {
        await this.page.goto('https://realworld.qa.guru/#/');
        await this.authorName.click();
        await expect(this.authorProfileAvatar).toBeVisible();
        await expect(this.authorArticles).toBeVisible();
    }
}