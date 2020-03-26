import { browser, element, by } from "protractor";

export class xyzHomePage {
    private _logoutButton = element(by.buttonText('Logout'));

    async verifyLoginSuccess(){
        return await this._logoutButton.isPresent();
    }
};