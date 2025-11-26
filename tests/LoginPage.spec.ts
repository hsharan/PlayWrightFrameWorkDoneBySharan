import { LoginPage} from '../pages/LoginPage';
import { test, expect } from '../fixtures/baseFixtures';

/*
AAA > arranege act assert

*/
test(`verify valid login`, async({homePage}) => {
    await expect(homePage.page).toHaveTitle('My Account');
   //expect (await homePage.isUSerLoggedIn()).toBeTruthy();
});

test.skip(`verify invalid login`, async({page, baseURL}) => {
    let loginPage = new LoginPage(page);
    await loginPage.goToLoginPage(baseURL);
    await loginPage.doLogin('2sshagargi@gmail.com', '2test@123');
    const errorMsg = await loginPage.getInvalidLoginMessage();
    expect(errorMsg).toContain(` Warning: No match for E-Mail Address and/or Password.`)
});
