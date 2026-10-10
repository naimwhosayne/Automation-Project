

import { test, expect } from '@playwright/test';
test('Login Flow Test', async ({ page }) => {
test.setTimeout(0);

    await page.goto('https://qa.taltektc.com/index.html', {
        waitUntil: 'domcontentloaded'
    });

    await page.getByPlaceholder('Email address or Student ID')
        .fill('naim.whosayne@gmail.com');

   
    await page.getByPlaceholder('Password')
        .fill('123456123456');

 
    await page.getByRole('button', {
        name: /log in|sign in/i
    }).click();

   
    await expect(page).toHaveURL(/home\.html/);

       

    
    await page.locator(
        '#sidebar-wrapper a[href="api-docs.html"]:visible'
    ).click();

   
    await expect(page).toHaveURL(/api-docs\.html/);

    
    await page.waitForEvent('close', { timeout: 0 });
});
