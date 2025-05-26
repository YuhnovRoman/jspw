import { faker } from "@faker-js/faker";

export class ArticleBuilder {
    generateArticleTitle() {
        this.articleTitle = faker.commerce.productName();
        return this;
    };

    generateArticleInfo() {
        this.articleInfo = faker.book.format();
        return this;
    };

    generateArticleContent() {
        this.articleContent = faker.lorem.paragraph();
        return this;
    };

    generateArticleTag() {
        this.articleTag = faker.book.genre();
        return this;
    };

    generate() {
        return {
            title: this.articleTitle,
            aboutInfo: this.articleInfo,
            content: this.articleContent,
            tag: this.articleTag,    
        }
    };
};