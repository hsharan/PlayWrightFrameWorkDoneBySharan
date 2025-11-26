import { test, expect, Page, Locator } from '@playwright/test';
import { ElementUtil } from '../utils/ElementUtil';
import {LoginPage} from '../pages/LoginPage';
import {ResultsPage} from '../pages/ResultsPage';

export class HomePage{
    //1 page locators 
    readonly page: Page;
    private readonly eleUtil: ElementUtil;
    private readonly logoutLink: Locator;
    private readonly loginLink: Locator;
    private readonly search: Locator;
    private readonly searchIcon: Locator;


//2 page constructor of the class.....
constructor(page: Page){
    this.page = page;
    this.eleUtil = new ElementUtil(page);
    this.logoutLink = page.getByText('Logout', { exact: true });
    this.loginLink = page.getByRole('link', { name: 'Login' });
    this.search = page.locator('.form-control.input-lg');
    this.searchIcon = page.locator(`//i[@class='fa fa-search']`);


}
//3, page actions
async isUSerLoggedIn(){
    return await this.eleUtil.isVisible(this.logoutLink, 0);
}

async logout() : Promise<LoginPage>{
    await this.eleUtil.click(this.logoutLink, {timeout: 5000}, 1)
    await this.eleUtil.click(this.loginLink, { timeout: 5000}, 1);
    return new LoginPage(this.page);
}

async doSearch(searchkey: string){
    console.log(`This is the search item key : ${searchkey}`);
    await this.eleUtil.fill(this.search, searchkey);
    await this.eleUtil.click(this.searchIcon);
    return new ResultsPage(this.page);


}

}

/*
page.locator(`#input-email`)
page.locator(`#input-password`)
page.locator(`//input[@type='submit']`)

*/