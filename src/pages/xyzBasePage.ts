import { browser, by, ElementFinder } from "protractor";
import { logger } from "../utils/log";


export class BasePage{

    async launchApplication(url: string){
        logger.info('Launching Application...');
        await browser.get(url);
        await browser.manage().window().maximize();
    };

    get title(){
        let title = browser.getTitle();
        logger.info(`Page Title: ${title}`);
        return title
    };

    async select(selectElement: ElementFinder, selectValue: string){
        await selectElement.all(by.tagName('option')).each(option => {
            if (option) {
                option.getText().then(value => {
                    if (value === selectValue){
                        logger.info(`performing select operation with value ${selectValue}`);
                        option.click();
                    };
                });
            };
        });
    };

    get parentWindowHandle(){
        return browser.getWindowHandle();
    }

    get windowHandles(){
        return browser.getAllWindowHandles();
    }
}