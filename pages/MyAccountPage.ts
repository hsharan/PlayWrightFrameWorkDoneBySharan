import { test, expect, Page, Locator } from '@playwright/test';
import { ElementUtil } from '../utils/ElementUtil';
import { LoginPage } from '../pages/LoginPage';
import { ResultsPage } from '../pages/ResultsPage';

export class MyAccountPage {
   readonly page: Page;

   // Left section links
   readonly editAccountInfo: Locator;
   readonly changePassword: Locator;
   readonly modifyAddressBook: Locator;
   readonly modifyWishlist: Locator;
   readonly viewOrderHistory: Locator;
   readonly viewDownloads: Locator;
   readonly rewardPoints: Locator;
   readonly returnRequests: Locator;
   readonly transactions: Locator;
   readonly recurringPayments: Locator;
   readonly affiliateAccount: Locator;
   readonly newsletter: Locator;

   // Right side navigation
   readonly rightEditAccount: Locator;
   readonly rightPassword: Locator;
   readonly rightAddressBook: Locator;
   readonly rightWishList: Locator;
   readonly rightOrderHistory: Locator;
   readonly rightDownloads: Locator;
   readonly rightRecurringPayments: Locator;
   readonly rightRewardPoints: Locator;
   readonly rightReturns: Locator;
   readonly rightTransactions: Locator;
   readonly rightNewsletter: Locator;
   readonly logout: Locator;

   constructor(page: Page) {
      this.page = page;

      // Left block locators
      this.editAccountInfo = page.locator('text=Edit your account information');
      this.changePassword = page.locator('text=Change your password');
      this.modifyAddressBook = page.locator('text=Modify your address book entries');
      this.modifyWishlist = page.locator('text=Modify your wish list');

      this.viewOrderHistory = page.locator('text=View your order history');
      this.viewDownloads = page.locator('text=Downloads');
      this.rewardPoints = page.locator('text=Your Reward Points');
      this.returnRequests = page.locator('text=View your return requests');
      this.transactions = page.locator('text=Your Transactions');
      this.recurringPayments = page.locator('text=Recurring payments');

      this.affiliateAccount = page.locator('text=Register for an affiliate account');
      this.newsletter = page.locator('text=Subscribe / unsubscribe to newsletter');

      // Right block locators (sidebar)
      this.rightEditAccount = page.locator('a:text("Edit Account")');
      this.rightPassword = page.locator('a:text("Password")');
      this.rightAddressBook = page.locator('a:text("Address Book")');
      this.rightWishList = page.locator('a:text("Wish List")');
      this.rightOrderHistory = page.locator('a:text("Order History")');
      this.rightDownloads = page.locator('a:text("Downloads")');
      this.rightRecurringPayments = page.locator('a:text("Recurring payments")');
      this.rightRewardPoints = page.locator('a:text("Reward Points")');
      this.rightReturns = page.locator('a:text("Returns")');
      this.rightTransactions = page.locator('a:text("Transactions")');
      this.rightNewsletter = page.locator('a:text("Newsletter")');
      this.logout = page.locator('a:text("Logout")');
   }

   async clickEditAccount() {
      await this.editAccountInfo.click();
   }
}
