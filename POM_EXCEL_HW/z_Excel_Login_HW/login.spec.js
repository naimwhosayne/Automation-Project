const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../pages/LoginPage');
const { readExcel } = require('../utils/excelReader');

const loginData = readExcel();

for (const [index, user] of loginData.entries()) {

    test(`Login test for ${user.Username ?? 'unknown'} (${index + 1})`, async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.login(user.Username, user.Password);

        if (user.Expected === 'success') {

            await expect(page).toHaveURL(/inventory.html/);

        } else {

            await expect(page.locator('[data-test="error"]')).toBeVisible();

        }
    });
}