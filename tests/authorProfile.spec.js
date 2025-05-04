import { test } from "@playwright/test";
import { App } from "../src/pages/appPage";

test("Проверка отображения элементов на странице автора", async ({ page }) => {
    let app = new App(page);

    await app.authorPage.openAuthorPage();
    await app.generalNavigationPage.checkHeader();
    await app.generalNavigationPage.checkFooter();
    await app.generalNavigationPage.checkPagination();
    await app.authorPage.checkUserInfo();
    await app.articlePreviewPage.checkArticlePreview();
    await app.authorPage.checkAuthorTabPanel();
});