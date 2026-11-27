import { BaseClass } from "../BaseLibrary/BaseClass.spec";

export class LoginPage extends BaseClass {
  constructor(page, expect) {
    super(page, expect);
    this.usernameInput = this.page.locator("//input[@id='user-name']");
    this.passwordInput = this.page.locator("//input[@id='password']");
    this.loginBtn = this.page.locator("//input[@id='login-button']");
    this.bagAddBtn = this.page.locator("//button[@id='add-to-cart-sauce-labs-backpack']");
    this.bikeLightAddBtn = this.page.locator("//button[@id='add-to-cart-sauce-labs-bike-light']");
    this.tshirtAddBtn = this.page.locator("//button[@id='add-to-cart-sauce-labs-bolt-t-shirt']");
    this.cartIcon = this.page.locator('//a[@class="shopping_cart_link"]');
    this.checkoutBtn = this.page.locator("//button[@id='checkout']");
    this.firstNameInput = this.page.locator("//input[@id='first-name']");
    this.lastNameInput = this.page.locator("//input[@id='last-name']");
    this.postalCodeInput = this.page.locator("//input[@id='postal-code']");
    this.continueBtn = this.page.locator("//input[@id='continue']");
    this.finishBtn = this.page.locator("//button[@id='finish']");
    this.completeCheckOut = this.page.locator("//span[@class='title']");
  }
}
