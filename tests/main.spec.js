import { expect } from '@playwright/test';
import { test } from "../src/helper/fixtures/index";

test("Проверка отображения элементов на главной странице", async ({ app }) => {
  await app.mainPage.openMainPage();
  await expect(app.generalNavigationPage.headerLogo).toBeVisible();
  await expect(app.generalNavigationPage.headerSourceCode).toBeVisible();
  await expect(app.generalNavigationPage.homeLink).toBeVisible();
  await expect(app.mainPage.mainBanner).toBeVisible();
  await expect(app.mainPage.mainPopularTags).toHaveCount(50);
  await expect(app.generalNavigationPage.paginationWrapper).toBeVisible();
  await expect(app.generalNavigationPage.footerLogo).toBeVisible();
  await expect(app.generalNavigationPage.footerSourceCode).toBeVisible();
});

test("Фильтрация статей по тегу", async ({ app }) => {
  await app.mainPage.openMainPage();
  await expect(app.mainPage.mainDefaultFilterTab).toContainText("Global Feed");
  await expect(app.mainPage.mainPopularTags.first()).toBeVisible();
  await app.mainPage.tagButtonClick();
  await expect(app.mainPage.mainSelectedFilterTab).toContainText(await app.mainPage.getTagButtonText());
});