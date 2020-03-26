import { xyzLandingPage } from "../pages/xyzLandingPage";
import { xyzLoginPage } from "../pages/xyzLoginPage";
import { xyzHomePage } from "../pages/xyzHomePage";

describe('POM XYZ App', () =>{
    const landingPage = new xyzLandingPage();
    const loginPage = new xyzLoginPage();
    const homePage = new xyzHomePage();

    it('should login with customer', async () =>{
        await landingPage.launchApplication();
        await landingPage.loginAsCustomer();
        await loginPage.login('Harry Potter');
        expect(homePage.verifyLoginSuccess().then(bool=>{return bool;})).toBe(true);
    });
});