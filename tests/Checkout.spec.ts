import { test, expect } from '@playwright/test';

test('Checkout', async ({ page }) => {
  await page.goto('https://bonbonsweets.netlify.app/#/');
  await page.locator("//button[@data-item-id='cadbury-caramello-koala-share-pack']").click();
  await page.locator("footer:has-text('CHECKOUT')").click();
  await page.getByLabel("Full name").fill("Marilyana Cayones");
  await page.getByLabel("Email").fill("mcayones@gmail.com");

  await page.locator('input.snipcart__form__address__autocomplete__hidden__textbox').fill('Buenos Aires', { force: true });


  await page.getByText("Apt/Suite").fill("Apt 1");
  await page.getByRole('button', { name: 'Continue to shipping' }).click();

  await page.pause();
});