import { test, expect } from '@playwright/test';


test('test', async ({ page }) => {
  await page.goto('http://inblrbnc706.india.tcs.com:22420/branchportal/logout.action#!');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('CLSGM1');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('ChangePwd@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByLabel('Open new application').click();
  await page.getByText('CLOS', { exact: true }).click();
  await page.locator('iframe[name="frame-1-12"]').contentFrame().locator('a').filter({ hasText: 'Create Application' }).click();
  await page.locator('iframe[name="frame-1-12"]').contentFrame().getByLabel('Select CIF Number').click();
  await page.locator('iframe[name="frame-1-12"]').contentFrame().getByRole('textbox', { name: 'CPT #' }).fill('100105642');
  await page.locator('iframe[name="frame-1-12"]').contentFrame().getByRole('button', { name: 'Search' }).click();
  await page.locator('iframe[name="frame-1-12"]').contentFrame().locator('#custQbe_select_listRow_custQbeSearch_table1').check();
  await page.locator('iframe[name="frame-1-12"]').contentFrame().getByRole('button', { name: 'Select and Proceed' }).click();
  await page.locator('iframe[name="frame-1-12"]').contentFrame().getByLabel('Application Type').selectOption('4');
  await page.locator('iframe[name="frame-1-12"]').contentFrame().getByLabel('Application Type').selectOption('92');
  await page.locator('iframe[name="frame-1-12"]').contentFrame().getByRole('button', { name: 'Create' }).click();
  await page.locator('iframe[name="frame-1-12"]').contentFrame().getByText('Application can not be').click();
  await page.locator('iframe[name="frame-1-12"]').contentFrame().getByText('Application can not be').click();
  await page.locator('iframe[name="frame-1-12"]').contentFrame().getByRole('button', { name: 'OK' }).click();
  await page.locator('.fa.fa-sign-out').click();
});
