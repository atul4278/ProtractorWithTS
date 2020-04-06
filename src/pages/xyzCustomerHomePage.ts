import { element, by } from "protractor";
import { BasePage } from "./xyzBasePage";
import { logger } from "../utils/log";

export class xyzCustomerHomePage extends BasePage{
    private _logoutButton = element(by.buttonText('Logout'));

    async onHomePage(){
        logger.info('On Home Page...');
        return await this._logoutButton.isPresent();
    }

    async logout(){
        await this._logoutButton.click();
        logger.info('logging out...');
    }
};