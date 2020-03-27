import { element, by } from "protractor";


export class xyzLoginPage{
    private _customer = element(by.model('custId'));
    private _custOptions = this._customer.all(by.tagName('option'));
    private _loginButton = element(by.buttonText('Login'));

    async selectCustomer(selectValue: string){
        console.log('Select '+ selectValue);
        
        await this._custOptions.each((option) => {
            if (option){
                option.getText().then(value => {
                    if (value == selectValue){
                        option.click()
                    }
                });
            };
        });
    }

    async login(selectValue: string){
        await this.selectCustomer(selectValue);
        await this._loginButton.click();
    }
}