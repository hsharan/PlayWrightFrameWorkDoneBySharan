import { Page, Locator } from '@playwright/test';
import { ElementUtil } from '../utils/ElementUtil';
import {ProductInfoPage} from '../pages/ProductInfoPage';

export class ResultsPage{
    //1 page locators 
    private readonly page: Page;
    private readonly eleUtil: ElementUtil;
    private readonly results : Locator
  


//2 page constructor of the class.....
    constructor(page: Page){
    this.page = page;
    this.eleUtil = new ElementUtil(page);
    this.results = page.locator(`.product-thumb`);


}
//3, page actions
async getSearchResultsCount(): Promise<number>{
    return await this.results.count();

}

async selectProduct(productName: string){
console.log('========= Product Name =========: '+ productName);
await this.eleUtil.click(this.page.getByRole('link', { name: `${productName}` }));
return new ProductInfoPage(this.page);

}

}

