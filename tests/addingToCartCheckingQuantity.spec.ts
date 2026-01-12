import { test, expect } from '@playwright/test';
import { ShopPage } from '../page/shoppage';

//test('Increasing the number of items in the cart', async ({ page }) => {
  //await page.goto('https://bonbonsweets.netlify.app/#/');
  //await page.locator("//button[@data-item-id='cadbury-caramello-koala-share-pack']").click();
  //await page.locator("//button[2]//*[name()='svg']").click();
  //const quantityInput = page.locator('.snipcart__modal__header__count').first();
  //await expect(quantityInput).toBeVisible();
  //const quantity = await quantityInput.innerText();
  //console.log('Number of items in cart: ', quantity);
  //await expect(quantityInput).toHaveText('2'); /*ASSERTION*/
  //await page.pause();
//});


/*test('Increasing the number of items in the cart', async ({ page }) => {

  await page.goto('https://bonbonsweets.netlify.app/#/');
  await page.getByRole('figure', { name: 'Cadbury Caramello Koala Share' }).getByRole('button').click();
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(2).click();
    const quantityInput = page.locator('.snipcart__modal__header__count').first();
  await expect(quantityInput).toBeVisible();
  const quantity = await quantityInput.innerText();
  console.log('Number of items in cart: ', quantity);
  await expect(quantityInput).toHaveText('2'); /*ASSERTION*/

//});

/*test('Increasing the number of items in the cart', async ({ page }) => {

  //await page.goto('https://bonbonsweets.netlify.app/#/');
    const shopPage = new ShopPage(page);
  await shopPage.goto();

  //await page.getByRole('figure', { name: 'Cadbury Caramello Koala Share' }).getByRole('button').click();
  //await page.getByRole('button').filter({ hasText: /^$/ }).nth(2).click();
  await shopPage.addProductToCart();

  //const quantityInput = page.locator('.snipcart__modal__header__count').first();
  //await expect(quantityInput).toBeVisible();
  //const quantity = await quantityInput.innerText();
  //console.log('Number of items in cart: ', quantity);
  await shopPage.openCart();

  const quantity =  await shopPage.getCartQuantity();
  console.log('Number of items in cart: ', quantity);
  await expect(quantity).toBe('2'); /*ASSERTION*/

//});*/

test('adding items to the basket and checking quantity', async ({ page }) => {
  const shopPage = new ShopPage(page);
  await shopPage.goto();
  await shopPage.addProductToCart();
  await shopPage.openCart();
  const quantity =  await shopPage.getCartQuantity();
  console.log('Number of items in cart: ', quantity);
  await expect(quantity).toBe('1'); /*ASSERTION,  Assert on visible UI*/

});