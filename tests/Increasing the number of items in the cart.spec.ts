import { test, expect } from '@playwright/test';

test('Increasing the number of items in the cart', async ({ page }) => {
  await page.goto('https://bonbonsweets.netlify.app/#/');
  await page.locator("//button[@data-item-id='cadbury-caramello-koala-share-pack']").click();
  await page.locator("//button[2]//*[name()='svg']").click();

  const quantityInput = page.locator('.snipcart__modal__header__count').first();
  await expect(quantityInput).toBeVisible();
  const quantity = await quantityInput.innerText();
  console.log('Number of items in cart: ', quantity);
  await expect(quantityInput).toHaveText('2'); /*ASSERTION*/
  //await page.pause();
});