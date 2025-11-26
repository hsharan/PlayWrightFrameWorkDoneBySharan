
import { MyAccountPage } from '../pages/myAccountpage';
import { ResultsPage } from '../pages/ResultsPage';
//import { test, expect } from '../fixtures/baseFixtures';
import { Page,test, expect } from '@playwright/test';

   test.skip('Navigate to Edit Account Page', async ({ page }) => {
      const account = new MyAccountPage(page);
      await account.clickEditAccount();

      await expect(page).toHaveURL(/edit/);
      await expect(page.locator('h1')).toHaveText('My Account Information');
   });

