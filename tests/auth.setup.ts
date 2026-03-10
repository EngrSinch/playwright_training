import { test as setup, expect } from "@playwright/test";

setup("Create customer 01 auth", async ({ page, context}) => {
    // Setup Variables that will be used
    const email = "customer@practicesoftwaretesting.com";
    const password = "welcome01";
    const customer01AuthFile = ".auth/customer01.json"

    // Then exec login auth
    await page.goto("https://practicesoftwaretesting.com/auth/login")

    // fill email
    // await page.locator('[data-test="email"]').fill('customer@practicesoftwaretesting.com');
    await page.getByTestId("email").fill(email);
    // fill password
    //await page.locator('[data-test="password"]').fill('welcome01');
    await page.getByTestId("password").fill(password);
    // click submit button
    //await page.locator('[data-test="login-submit"]').click();
    await page.getByTestId("login-submit").click();

    await expect(page.getByTestId("nav-menu")).toContainText("Jane Doe");
    await context.storageState({ path: customer01AuthFile});
});
