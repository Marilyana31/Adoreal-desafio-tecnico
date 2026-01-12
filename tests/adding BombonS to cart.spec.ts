import { test, expect } from '@playwright/test';

/*test('Adding Caixa de Bombons Sortidos Garoto to cart', async ({ page }) => {
  await page.goto('https://bonbonsweets.netlify.app/#/');
  await page.locator("//button[@data-item-id='caixa-de-bombons-sortidos-garoto']").click();
  await page.locator("//button[@class='snipcart__modal__close']//*[name()='svg']").click();
  await page.pause();
});*/

test('Adding Caixa de Bombons Sortidos Garoto to cart', async ({ page }) => {
  await page.goto('https://bonbonsweets.netlify.app/#/');
  await page.getByRole('figure', { name: 'Cadbury Caramello Koala Share' }).getByRole('button').click();
  await page.getByRole('button', { name: 'Continue shopping' }).click();
});