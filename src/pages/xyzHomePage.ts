import { browser, element, by } from "protractor";
import { BasePage } from "./xyzBasePage";

export class xyzHomePage extends BasePage{
    private _logoutButton = element(by.buttonText('Logout'));

    async verifyLoginSuccess(){
        console.log('Verify Login successfull...');
        browser.sleep(2000);
        return await this._logoutButton.isDisplayed();
    }
};