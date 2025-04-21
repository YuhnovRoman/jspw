import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('test', async ({ page }) => {
  await page.goto('file:///D:/jsPlaywright/demo.html');
  await page.getByTestId('email').click();
  await page.getByTestId('email').fill('йцуке');
  await page.getByRole('textbox', { name: 'Пароль' }).click();
  await page.getByRole('textbox', { name: 'Пароль' }).fill('123');
  await page.getByRole('button', { name: 'Войти' }).click();
  await expect(page.getByTestId('email')).toHaveValue('йцуке');
  await expect(page.getByRole('textbox', { name: 'Пароль' })).toHaveValue('123');
});