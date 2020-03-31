import { element, by } from "protractor";
import { BasePage } from "./xyzBasePage";

export class xyzLandingPage extends BasePage{
    private _customerLogin = element(by.buttonText('Customer Login'));
    private _managerLogin = element(by.buttonText('Bank Manager Login'));

    async loginAsCustomer(){
        console.log('Login with Customer...');
        await this._customerLogin.click();
    }

    async loginAsManager(){
        console.log('Login with Manager...');
        await this._managerLogin.click();
    }

}