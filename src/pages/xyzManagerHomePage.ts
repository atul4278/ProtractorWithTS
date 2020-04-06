import { BasePage } from "./xyzBasePage";
import { element, by } from "protractor";
import { logger } from "../utils/log";

export class xyzManagerHomePage extends BasePage{
    private _addCustomer = element(by.partialButtonText('Add Customer'));
    private _openAccount = element(by.partialButtonText('Open Account'));
    private _showCustomers = element(by.partialButtonText('Customers'));

    async onManagerHomePage(){
        return await this._addCustomer.isPresent();
    }
}