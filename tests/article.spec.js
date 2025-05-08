import { test, expect } from '@playwright/test';
import { App } from "../src/pages/appPage";

test("Проверка отображения элементов на странице статьи", async ({ page }) => {
    let app = new App(page);

    await app.articlePage.openArticlePage("no comments");
    await expect(app.generalNavigationPage.headerLogo).toBeVisible();
    await expect(app.generalNavigationPage.headerSourceCode).toBeVisible();
    await expect(app.generalNavigationPage.homeLink).toBeVisible();
    await expect(app.generalNavigationPage.footerLogo).toBeVisible();
    await expect(app.generalNavigationPage.footerSourceCode).toBeVisible();
    await expect(app.articlePage.articleAuthorBannerImg).toBeVisible();
    await expect(app.articlePage.articleBannerInfo).toBeVisible();
    await expect(app.articlePage.articleAuthorBannerFollowButton).toBeVisible();
    await expect(app.articlePage.articleAuthorBannerFavoriteButton).toBeVisible();
    // Проверка, что статья не пустая и там есть текст
    await expect(async () => {
        expect(await app.articlePage.getArticleTextLength()).toBeGreaterThan(0);
    }).toPass();
    await expect(app.articlePage.articleActionsImg).toBeVisible();
    await expect(app.articlePage.articleActionsInfo).toBeVisible();
    await expect(app.articlePage.articleActionsFollowButton).toBeVisible();
    await expect(app.articlePage.articleActionsInfoFavoriteButton).toBeVisible();
    await expect(app.articlePage.articleCommentBlock).toContainText("There are no comments yet...");
});

test("Проверка подписки на автора на странице статьи", async ({ page }) => {
    let app = new App(page);

    await app.mainPage.openMainPage();
    await app.authPage.authorization();
    await expect(app.authPage.userImg).toBeVisible();
    await app.articlePage.openArticlePage();
    // Проверка, что статья не пустая и там есть текст
    await expect(async () => {
        expect(await app.articlePage.getArticleTextLength()).toBeGreaterThan(0);
    }).toPass();
    await app.articlePage.followAuthorClick();
    await expect(app.articlePage.articleAuthorBannerUnfollowButton).toBeVisible();
    await app.articlePage.unFollowAuthorClick()
    await expect(app.articlePage.articleActionsFollowButton).toBeVisible();
});

test("Проверка добавление статьи в избранное на странице статьи", async ({ page }) => {
    let app = new App(page);

    await app.mainPage.openMainPage();
    await app.authPage.authorization();
    await expect(app.authPage.userImg).toBeVisible();
    await app.articlePage.openArticlePage();
    // Проверка, что статья не пустая и там есть текст
    await expect(async () => {
        expect(await app.articlePage.getArticleTextLength()).toBeGreaterThan(0);
    }).toPass();
    let favoriteButtonText = await app.articlePage.articleAuthorBannerFavoriteButton.innerText();
    await app.articlePage.getFavoriteButtonText();
    await app.articlePage.favoriteButtonClick();
    await expect(app.articlePage.articleAuthorBannerFavoriteButton).not.toHaveText(favoriteButtonText);
    await app.articlePage.favoriteButtonClick();
    await expect(app.articlePage.articleActionsInfoFavoriteButton).toHaveText(favoriteButtonText);;
});


