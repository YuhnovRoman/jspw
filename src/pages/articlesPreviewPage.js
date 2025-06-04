export class ArticlesPreviewPage {
    constructor(page) {
        this.page = page;
        this.articleWrapper = page.locator("div[class='article-preview']");
        this.articlePreviewInfo = this.articleWrapper.locator("div[class='info']");
        this.articlePreviewTitle = this.articleWrapper.locator("h1");
        this.articlePreviewText = this.articleWrapper.locator("p");
        this.articlePreviewLike = this.articleWrapper.locator("span[class='counter']");
        this.articlePreviewTags = this.articleWrapper.locator("ul[class='tag-list']");     
    };
};