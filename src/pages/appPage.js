import { MainPage, ArticlesPreviewPage, GeneralNavigationPage, AuthorPage, ArticlePage, AuthPage } from "./index";

export class App {
    constructor(page) {
        this.page = page;
        this.mainPage = new MainPage(page);
        this.articlePreviewPage = new ArticlesPreviewPage(page);
        this.generalNavigationPage = new GeneralNavigationPage(page);
        this.authorPage = new AuthorPage(page);
        this.articlePage = new ArticlePage(page);
        this.authPage = new AuthPage(page);
    };
};