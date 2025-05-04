import { test } from '@playwright/test';
import { App } from "../src/pages/appPage";

test('Проверка отображения элементов на главной странице', async ({ page }) => {
  let app = new App(page);

  await app.mainPage.openMainPage();
  await app.generalNavigationPage.checkHeader();
  await app.mainPage.checkMainContent();
  await app.generalNavigationPage.checkPagination();
  await app.generalNavigationPage.checkFooter();
}); 