import { test, expect } from '@playwright/test';

test('Enter and exit the cart', async ({ page }) => {
  await page.goto('https://bonbonsweets.netlify.app/#/');
  await page.locator("button:has-text('View cart')").click();
  const cartItem = page.locator("section:visible");
    await expect(cartItem).toBeVisible();
  await page.locator("//button[@class='snipcart__modal__close']//*[name()='svg']").click();
  await page.pause();
});