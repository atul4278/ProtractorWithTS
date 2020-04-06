import { element, by } from "protractor";
import { BasePage } from "./xyzBasePage";
import { logger } from "../utils/log";

export class xyzLandingPage extends BasePage{
    private _customerLogin = element(by.buttonText('Customer Login'));
    private _managerLogin = element(by.buttonText('Bank Manager Login1'));

    async continueAsCustomer(){
        logger.info('Login with Customer...');
        await this._customerLogin.click();
    }

    async continueAsManager(){
        logger.info('Login with Manager...');
        await this._managerLogin.click();
    }

}