
import { LoginPage } from "../PageObject/LoginPageObject.spec.js";

export class LoginAction extends LoginPage {
  constructor(page, expect) {
    super(page, expect);
  }

  async enterusername(username) {
    await this.usernameInput.fill(username);
  }

  async enterpassword(password) {
    await this.passwordInput.fill(password);
  }

  async clickloginbutton() {
    await this.loginBtn.click();
  }

  async selectproduct() {
    await this.bagAddBtn.click();
    await this.bikeLightAddBtn.click();
    await this.tshirtAddBtn.click();
  }

  async selectcarticon() {
    await this.cartIcon.click();
  }

  async selectcheckoutbutton() {
    await this.checkoutBtn.click();
  }

  async firstname(firstname) {
    await this.firstNameInput.fill(firstname);
  }

  async lastname(lastname) {
    await this.lastNameInput.fill(lastname);
  }

  async postalcode(postalcode) {
    await this.postalCodeInput.fill(postalcode);
  }

  async continuebutton() {
    await this.continueBtn.click();
  }

  async finishbutton() {
    await this.finishBtn.click();
  }

  async completeCheckOut() {
   
  }

  async closebrowser() {
    await this.page.close();
  }
}
