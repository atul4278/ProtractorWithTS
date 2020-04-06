import { element, by } from "protractor";
import { BasePage } from "./xyzBasePage";


export class xyzLoginPage extends BasePage{
    private _customer = element(by.model('custId'));
    private _loginButton = element(by.buttonText('Login'));

    async login(selectValue: string){
        await this.select(this._customer, selectValue);
        await this._loginButton.click();
    }

    async onLoginPage(){
        return await this._customer.isPresent();
    }
}