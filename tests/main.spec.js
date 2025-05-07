import { test,expect } from '@playwright/test';
import { App } from "../src/pages/appPage";

test("Проверка отображения элементов на главной странице", async ({ page }) => {
  let app = new App(page);

  await app.mainPage.openMainPage();
  await expect(app.generalNavigationPage.headerLogo).toBeVisible();
  await expect(app.generalNavigationPage.headerLogo).toBeVisible();
  await expect(app.generalNavigationPage.headerLogo).toBeVisible();
  await expect(app.mainPage.mainBanner).toBeVisible();
  await expect(app.mainPage.mainPopularTags).toHaveCount(50);
  await expect(app.generalNavigationPage.paginationWrapper).toBeVisible();
  await expect(app.generalNavigationPage.footerLogo).toBeVisible();
  await expect(app.generalNavigationPage.footerSourceCode).toBeVisible();
});

test("Фильтрация статей по тегу", async ({ page }) => {
  let app = new App(page);

  await app.mainPage.openMainPage();
  await expect(app.mainPage.mainDefaultFilterTab).toContainText("Global Feed");
  await expect(app.mainPage.mainPopularTags.first()).toBeVisible();
  await app.mainPage.tagButtonClick();
  await expect(app.mainPage.mainSelectedFilterTab).toContainText(await app.mainPage.getTagButtonText());
});