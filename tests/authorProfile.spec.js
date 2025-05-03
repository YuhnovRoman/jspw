import { test } from "@playwright/test";
import { AuthorPage } from "../pages/authorPage";
import { ArticlesPreviewPage } from '../pages/articlesPreviewPage';
import { GeneralNavigationPage } from '../pages/generalNavigationPage';


test("Проверка страницы автора", async ({ page }) => {
    const authorPage = new AuthorPage(page);
    const articlePreviewPage = new ArticlesPreviewPage(page);
    const generalNavigationPage = new GeneralNavigationPage(page);

    await authorPage.openAuthorPage();
    await generalNavigationPage.checkHeader();
    await generalNavigationPage.checkFooter();
    await generalNavigationPage.checkPagination();
    await authorPage.checkUserInfo();
    await articlePreviewPage.checkArticlePreview();
    await authorPage.checkAuthorTabPanel();
});