import { xyzLandingPage } from "../src/pages/xyzLandingPage";
import { xyzLoginPage } from "../src/pages/xyzLoginPage";
import { xyzCustomerHomePage } from "../src/pages/xyzCustomerHomePage";
import { xyzManagerHomePage } from "../src/pages/xyzManagerHomePage";
import { logger } from "../src/utils/log";


describe('POM XYZ App', () =>{
    const url = 'http://www.way2automation.com/angularjs-protractor/banking/#/'
    const landingPage = new xyzLandingPage();
    const loginPage = new xyzLoginPage();
    const custHomePage = new xyzCustomerHomePage();
    const manHomePage = new xyzManagerHomePage();

    beforeEach(() => {
        logger.info(`#####################################`);
        landingPage.launchApplication(url);
    });

    it('should login with customer', async () =>{
        try {
            await landingPage.continueAsCustomer();
            await loginPage.login('Harry Potter');
            expect(custHomePage.onHomePage()).toBe(true);
            await custHomePage.logout();
            expect(loginPage.onLoginPage()).toBe(true)
        } catch (error) {
            fail(error);
            logger.error(`${error.name}: ${error.message}`);
        }
    });

    it('should login with Manager', async () =>{
        try {
            await landingPage.continueAsManager();
            expect(manHomePage.onManagerHomePage()).toBe(true);
        } catch (error) {
            fail(error);
            logger.error(`${error.name}: ${error.message}`);
        }
    });
});