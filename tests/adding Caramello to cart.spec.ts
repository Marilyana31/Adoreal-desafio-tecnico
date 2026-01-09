import { test, expect } from '@playwright/test';

test('Adding Cadbury Caramello and Bombons to cart', async ({ page }) => {
  await page.goto('https://bonbonsweets.netlify.app/#/');
  await page.locator("//button[@data-item-id='cadbury-caramello-koala-share-pack']").click();
  await page.locator("//button[@class='snipcart__modal__close']//*[name()='svg']").click();
  await page.pause();
});