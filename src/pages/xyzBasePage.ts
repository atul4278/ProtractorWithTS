import { browser, by, ElementFinder } from "protractor";


export class BasePage{
    async naviagte(url: string){
        console.log('Launching Application...');
        await browser.get(url);
        await browser.manage().window().maximize();
    };

    get title(){
        let title = browser.getTitle();
        console.log(`Page Title: ${title}`);
        
        return title
    };

    async select(selectElement: ElementFinder, selectValue: string){
        await selectElement.all(by.tagName('option')).each(option => {
            if (option) {
                option.getText().then(value => {
                    if (value === selectValue){
                        console.log(`performing select operation with value ${selectValue}`);
                        option.click();
                    };
                });
            };
        });
    };
}