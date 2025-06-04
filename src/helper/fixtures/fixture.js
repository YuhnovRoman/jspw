import { test as base } from '@playwright/test';
import { App } from '../../pages/index';

export const test = base.extend({
  app: async ({ page }, use) => {
    let app = new App(page);
    await use(app);
  },
});

// import base from '@playwright/test';
// const { App } = require('../../pages/index');

// exports.test = base.test.extend({
//   app: async ({ page }, use) => {
//     const app = new App(page);
//     await use(app);
//   },
// });