import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://admin.test.gohawq.com/');
  await page.getByRole('textbox', { name: 'Enter your email' }).click();
  await page.getByRole('textbox', { name: 'Enter your email' }).fill('rameshsankar.s@skeintech.com');
  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('Test@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Attributes' }).click();
  await page.getByRole('button', { name: 'Products' }).click();
  await page.getByText('Product Type').click();
  await page.getByRole('option', { name: 'New' }).click();
  await page.getByText('Vendor Type').click();
  await page.getByRole('option', { name: 'Individual' }).click();
});