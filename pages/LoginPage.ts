import { test, expect, Page, Locator } from '@playwright/test';
import { ElementUtil } from '../utils/ElementUtil';
import {HomePage} from  '../pages/HomePage';
import {RegisterPage} from  '../pages/RegisterPage';

export class LoginPage{
    //1 page locators 
    readonly page: Page;
    private readonly eleUtil;
    private readonly emailId: Locator;
    private readonly password: Locator;
    //private readonly loginBtn: Locator;
    private readonly loginBtn: string;
    private readonly warningMsg: Locator;
    private readonly registerLink: Locator;

//2 page constructor of the class.....
    constructor(page: Page){
    this.page = page;
    this.eleUtil = new ElementUtil(page);
    this.emailId = page.locator(`#input-email`);
    this.password = page.locator(`#input-password`);
    //this.loginBtn = page.locator(`//input[@type='submit']`);
    this.loginBtn = `//input[@type='submit']`;
    this.warningMsg = page.locator(`.alert.alert-danger.alert-dismissible`);
    this.registerLink = page.getByText('Register', {exact: true});

}

//3 Page actions/ methods to define
/**
 * Navigate to login page
 */
async goToLoginPage(baseURL: string | undefined){
    await this.page.goto(baseURL+'?route=account/login');
}

/**
 * Suppling username and password
 * @param email 
 * @param password 
 * @returns 
 */
async doLogin(email: string, password: string): Promise<HomePage>{
    // await this.emailId.fill(email);
    // await this.emailId.fill(password);
    // await this.emailId.click();

await this.eleUtil.fill(this.emailId , email);
await this.eleUtil.fill(this.password, password);
await this.eleUtil.click(this.loginBtn, {force : true, timeout: 5000});
// //return this.page.title();
// const pageTitle = await this.page.title();
// console.log(`Home page Title: ${pageTitle}`);
// return pageTitle;
return new HomePage(this.page);

}
/**
 * Invalid login error message
 * @returns 
 */
async getInvalidLoginMessage(): Promise<string | null>{
const errorMsg = await this.eleUtil.getText(this.warningMsg);
console.log('Invalid login error message : '+ errorMsg);
return errorMsg;

}

async navigateToRegisterPage(): Promise<RegisterPage>{
    await this.eleUtil.click(this.registerLink, {force: true}, 1);
    return new RegisterPage(this.page);
}

}

/*
page.locator(`#input-email`)
page.locator(`#input-password`)
page.locator(`//input[@type='submit']`)

*/