import { browser, element, by } from "protractor";

export class xyzLandingPage{
    private _customerLogin = element(by.buttonText('Customer Login'));
    private _managerLogin = element(by.buttonText('Bank Manager Login'));

    get title(){
        return browser.getTitle();
    }

    async launchApplication(){
        console.log('Launching Application...');
        await browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/');
    }

    async loginAsCustomer(){
        console.log('Login with Customer');
        await this._customerLogin.click();
    }

    async loginAsManager(){
        console.log('Login with Manager');
        await this._managerLogin.click();
    }

}