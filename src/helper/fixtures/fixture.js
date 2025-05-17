import { test as base } from '@playwright/test';
import { App } from '../../pages/appPage';

export const test = base.extend({
  app: async ({ page }, use) => {
    let app = new App(page);
    await use(app);
  },
});