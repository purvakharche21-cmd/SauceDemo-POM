const{ test,expect } = require('@playwright/test');
const{ LoginAction } =  require('../PageActions/LoginPageAction.spec.js'); 

test.describe('Login Test',()=>{
    test('Valid Login test ', async({page})=>{
        const loginActionRef = new LoginAction(page,expect);

        await loginActionRef.launchbrowser("https://www.saucedemo.com/");
        await loginActionRef.enterusername("standard_user");
        await loginActionRef.enterpassword("secret_sauce");
        await loginActionRef.clickloginbutton();
        await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
        await loginActionRef.selectproduct();
        await loginActionRef.selectcarticon();
        await loginActionRef.selectcheckoutbutton();
        await loginActionRef.firstname("Purva");
        await loginActionRef.lastname("Kharche");
        await loginActionRef.postalcode("411043");
        await loginActionRef.continuebutton();
        await loginActionRef.finishbutton();
        await expect(page).toHaveURL("https://www.saucedemo.com/checkout-complete.html");
        await loginActionRef.closebrowser();
    })
})