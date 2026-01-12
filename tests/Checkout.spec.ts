import { test, expect } from '@playwright/test';

/*test('Checkout', async ({ page }) => {
  await page.goto('https://bonbonsweets.netlify.app/#/');
  await page.locator("//button[@data-item-id='cadbury-caramello-koala-share-pack']").click();
  await page.locator("footer:has-text('CHECKOUT')").click();
  await page.getByLabel("Full name").fill("Marilyana Cayones");
  await page.getByLabel("Email").fill("mcayones@gmail.com");
  //const addressInput = page.locator('input.snipcart__form__address__autocomplete__hidden__texbox');
  //await addressInput.click();
  //await addressInput.fill('Argentina');
  await page.getByText("Apt/Suite").fill("Apt 1");
  await page.locator('div.snipcart__form__address__autocomplete--address').click();
  await page.getByRole('button', { name: 'Continue to shipping' }).click();
  await page.pause();
});*/

test('Checkout', async ({ page }) => {
  await page.goto('https://bonbonsweets.netlify.app/#/');
  await page.getByRole('figure', { name: 'Cadbury Caramello Koala Share' }).getByRole('button').click();
  await page.getByRole('button', { name: 'Checkout' }).click();
  await page.getByRole('textbox', { name: 'Full name' }).click();
  await page.getByRole('textbox', { name: 'Full name' }).fill('marilyana');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('mcayones@gmail.com');
  await page.locator('.snipcart__form__address__autocomplete--address').click();
  await page.getByRole('textbox').nth(2).fill('canada');
  await page.getByRole('textbox', { name: 'Apt/Suite' }).click();
  await page.getByRole('textbox', { name: 'Apt/Suite' }).fill('123');
  await page.getByRole('button', { name: 'Continue to shipping' }).click();
  await page.pause();
});