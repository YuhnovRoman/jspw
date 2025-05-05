import { test } from '@playwright/test';
import { App } from "../src/pages/appPage";

test("Проверка отображения элементов на странице статьи", async ({ page }) => {
    let app = new App(page);

    await app.articlePage.openArticlePage("no comments");
    await app.generalNavigationPage.checkHeader();
    await app.generalNavigationPage.checkFooter();
    await app.articlePage.checkArticleBanner();
    await app.articlePage.checkArticleContent();
    await app.articlePage.checkArticleActions();
    await app.articlePage.checkArticleEmptyCommentBlock();
});

test("Проверка подписки на автора на странице статьи", async ({ page }) => {
    let app = new App(page);

    await app.mainPage.openMainPage();
    await app.authPage.authorization();
    await app.articlePage.openArticlePage();
    await app.articlePage.checkArticleContent();
    await app.articlePage.checkFollowAuthorOnArticle();
});

test("Проверка добавление статьи в избранное на странице статьи", async ({ page }) => {
    let app = new App(page);

    await app.mainPage.openMainPage();
    await app.authPage.authorization();
    await app.articlePage.openArticlePage();
    await app.articlePage.checkArticleContent();
    await app.articlePage.checkFavoriteArticle();
});


