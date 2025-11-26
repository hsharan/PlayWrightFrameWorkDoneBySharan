import {test as base, expect} from '@playwright/test';
import { LoginPage} from '../pages/LoginPage';
import { HomePage} from '../pages/HomePage';
type MyFixtures = {
    homePage: HomePage;

};

//overriden test 
export const test = base.extend<MyFixtures>({
   homePage :async ({ page, baseURL}, use, testInfo) =>{
//testInfo - testng context, relfection
    const loginPage = new LoginPage(page);
    await loginPage.goToLoginPage(baseURL);
    const username = testInfo.project.metadata.appUsername;
    const password = testInfo.project.metadata.appPassword;
    
    const homePage = await loginPage.doLogin(username, password);
    //expect(await homePage.isUSerLoggedIn()).toBeTruthy();

    await use(homePage);


    }

});

export {expect};