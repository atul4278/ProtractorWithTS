import { browser, element, by } from "protractor";

export class xyzHomePage {
    private _logoutButton = element(by.buttonText('Logout'));

    async verifyLoginSuccess(){
        console.log('Verify Login successfull...');
        browser.sleep(2000);
        return await this._logoutButton.isDisplayed();
    }
};