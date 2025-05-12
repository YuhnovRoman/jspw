import { test, expect } from '@playwright/test';
import { App } from "../src/pages/appPage";
import { ArticleBuilder } from '../src/helper/articleBuilder';

test("Проверка создания статьи", async ({ page }) => {
    let app = new App(page);

    const randomArticle = new ArticleBuilder()
        .generateArticleTitle()
        .generateArticleInfo()
        .generateArticleContent()
        .generateArticleTag()
        .generate();

    console.log(randomArticle);

    await app.mainPage.openMainPage();
    await app.authPage.authorization();
    await app.articlePage.createNewArticle(randomArticle);
    await expect(app.articlePage.articleAuthorBannerImg).toBeVisible();
    await expect(app.articlePage.articleBannerInfo).toBeVisible();
    await expect(app.articlePage.articleContent).not.toBeEmpty();
    await expect(app.articlePage.articleActionsImg).toBeVisible();
    await expect(app.articlePage.articleActionsInfo).toBeVisible();
    await expect(app.articlePage.articleCommentBlock).toContainText("There are no comments yet...");
});