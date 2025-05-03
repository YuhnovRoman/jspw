import { test } from '@playwright/test';
import { MainPage } from '../pages/mainPage';
import { ArticlesPreviewPage } from '../pages/articlesPreviewPage';
import { GeneralNavigationPage } from '../pages/generalNavigationPage';

test('Проверка главной страницы', async ({ page }) => {
  const mainPage = new MainPage(page);
  const articlePreviewPage = new ArticlesPreviewPage(page);
  const generalNavigationPage = new GeneralNavigationPage(page);

  await mainPage.openMainPage();
  await generalNavigationPage.checkHeader();
  await mainPage.checkMainContent();
  await generalNavigationPage.checkPagination();
  await generalNavigationPage.checkFooter();
  await articlePreviewPage.checkArticlePreview();
}); 