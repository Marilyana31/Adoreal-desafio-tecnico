import { Page, Locator, expect } from '@playwright/test'; //- Page : Represents the browser/open tab.
                                                          // -Locator: Represents an element on the page (button, input, etc.).
                                                          // - expect: Used to make validations (assertions).


export class ShopPage {                                   // - This class represents a specific page in the system under test.
  readonly page: Page;                                    //Class properties, variables that store: the page, buttons,car items.
  readonly addToCartButton: Locator;                      //Readonly: these properties cannot be modified after being initialized.
  readonly openCartButton: Locator;
  readonly cartQuantity: Locator;

  constructor(page: Page) {             // Defining selectors: receives the page object from the test and saves it for use throughout the class

    this.page = page;

    this.addToCartButton = page         //search for the item "Cadbury Caramello Koala Share" and a button.
      .getByRole('figure', { name: 'Cadbury Caramello Koala Share' })
      .getByRole('button');

    this.openCartButton = page           // Locate the button to open the cart
      .getByRole('button')
      .filter({ hasText: /^$/ })
      .nth(2);

    this.cartQuantity = page        //search for the element that shows the quantity of items in the cart
      .locator('.snipcart__modal__header__count')
      .first();
  }

  async goto() {                      // Mehotd: opens the shop home page and waits to ensure the navigation is complete before proceeding.
    await this.page.goto('https://bonbonsweets.netlify.app/#/');
  }

  async addProductToCart() {        //Method: adds the product to the cart by clicking the "Add to Cart" button.
    await this.addToCartButton.click();
  }

  async openCart() {                 //Method: opens the cart by clicking the cart button. keeps the test code clean and reusable.
    await this.openCartButton.click();
  }

  async getCartQuantity(): Promise<string> {   // Method: waits for the cart quantity element to be visible and retrieves its text content.
    await expect(this.cartQuantity).toBeVisible();
    return await this.cartQuantity.innerText();
  }
}
