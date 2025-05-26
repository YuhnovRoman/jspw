import { expect } from "@playwright/test";
import { test } from "../src/helper/fixtures/index";

test("Проверка отображения элементов на странице автора", async ({ app }) => {
    await app.authorPage.openAuthorPage();
    await expect(app.generalNavigationPage.headerLogo).toBeVisible();
    await expect(app.generalNavigationPage.headerSourceCode).toBeVisible();
    await expect(app.generalNavigationPage.homeLink).toBeVisible();
    await expect(app.generalNavigationPage.footerLogo).toBeVisible();
    await expect(app.generalNavigationPage.footerSourceCode).toBeVisible();
    await expect(app.generalNavigationPage.paginationWrapper).toBeVisible();
    await expect(app.authorPage.authorImg).toBeVisible();
    await expect(app.authorPage.authorName).toBeVisible();
    await expect(app.authorPage.authorFollowersButton).toBeVisible();
    await expect(app.articlePreviewPage.articleWrapper).toHaveCount(3);
    // Проверка, что у каждой статьи есть блок с автором и датой, заголовок, текст, лайки, теги.
    for (let i = 0; i < 3; i++) {
        await expect(app.articlePreviewPage.articlePreviewInfo.nth(i)).toBeVisible();
        await expect(app.articlePreviewPage.articlePreviewTitle.nth(i)).toBeVisible();
        await expect(app.articlePreviewPage.articlePreviewText.nth(i)).toBeVisible();
        await expect(app.articlePreviewPage.articlePreviewLike.nth(i)).toBeVisible();
        await expect(app.articlePreviewPage.articlePreviewTags.nth(i)).toBeVisible();
    };
    await expect(app.authorPage.authorArticle).toBeVisible();
    await expect(app.authorPage.authorFavoriteArticle).toBeVisible();
    await app.authorPage.favoriteArticleClick();
    await expect(app.authorPage.authorEmptyState).toContainText("Keaton doesn\'t have favorites.");
});