import { test, expect, Page, Locator } from '@playwright/test';
import { ElementUtil } from '../utils/ElementUtil';
import {HomePage} from  '../pages/HomePage';


export class ProductInfoPage{
    //1 page locators 
    private readonly page: Page;
    private readonly eleUtil: ElementUtil;
    private readonly header: Locator;
    private readonly imageCount: Locator;
    private readonly productMetaData : Locator;
    private readonly productPriceData : Locator
   //
    private readonly productMap = new Map<string, string | number |null>();


//2 page constructor of the class.....
constructor(page: Page)
{
    this.page = page;
    this.eleUtil = new ElementUtil(page);
    this.header = page.locator(`h1`);
    this.imageCount = page.locator(`div#content img`);
    this.productMetaData = page.locator(`(//div[@id='content']//ul[@class='list-unstyled'])[1]/li`);
    this.productPriceData = page.locator(`(//div[@id='content']//ul[@class='list-unstyled'])[2]/li`);

}


//3 Page actions/ methods to define
async getProductHeader(): Promise<string>
{
    let header = await this.eleUtil.getInnerText(this.header);
    console.log('product header: '+ header);
    return header.trim();

}
async getProductImageCount(): Promise<number>
{
    await this.eleUtil.waitForElementVisible(this.imageCount);
    const imageCount = await this.imageCount.count();
    console.log(`Total number of images for ${await this.getProductHeader()} ==> ${imageCount}`);
    return imageCount;

}

async getProductDetails(): Promise<Map<string, string|number|null>>
{

    this.productMap.set('header', await this.getProductHeader());
    this.productMap.set('imagecount', await this.getProductImageCount())
    await this.getProductMetaData();
    await this.getProductPricingData();
    console.log(`Full product details for product : ${await this.productMetaData.allInnerTexts()}`);
    this.printProductDetails();
    return this.productMap;

}

private async printProductDetails()
{
    for( const [key, value] of this.productMap)
        {
            console.log(key, value);
        }
}

/*
MacBook Pro
Brand: Apple
Product Code: Product 18
Reward Points: 800
Availability: Out Of Stock

*/
private async getProductMetaData()
{
   let productMetaData: string[] = await this.productMetaData.allInnerTexts();
   
   for (let meta of productMetaData)
    {
        let metaData: string[] = meta.split(':');
        let metaKey = metaData[0].trim();
        let metaValue = metaData[1].trim();
        this.productMap.set(metaKey, metaValue);   
    }

}

/*
$2,000.00
Ex Tax: $2,000.00
*/
private async getProductPricingData()
{
    let productPricingData: string[] = await this.productPriceData.allInnerTexts();
    let productPrice = productPricingData[0].trim();
    let prodctExTaxPrice = productPricingData[1].split(':')[1].trim();
    this.productMap.set('price', productPrice);
    this.productMap.set('Extra tax price', prodctExTaxPrice);
}

}
