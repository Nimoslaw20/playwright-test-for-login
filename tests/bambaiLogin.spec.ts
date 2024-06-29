import { test, expect } from '@playwright/test';

test('Bambai Login Feature', async ({ page }) => {
  await page.goto('https://bamb.ai/');
  await expect(page).toHaveTitle(/Bambai/);
  await page.frameLocator('iframe[title="Landing Page"]').getByRole('link', { name: ' Login' }).click();
  await expect(page.getByRole('heading', { name: 'Sign-In' })).toBeVisible();
  await page.getByPlaceholder('Enter your email address or').fill('testaccount@gmail.com');
  await page.getByPlaceholder('Enter your passcode').fill('password123');
  await page.getByRole('button', { name: 'Sign in' }).click();
  if (await page.getByText("Unable to login with credentials").isVisible()) {
    console.log("Invalid login credentials");
  } else {
    console.log("Valid credentials accepted");
  }
  await page.waitForTimeout(2000);
  await expect(page.getByText('Dashboard')).toBeVisible();
});






