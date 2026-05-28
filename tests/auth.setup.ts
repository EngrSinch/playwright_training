import { test as setup, expect } from "@playwright/test";
import { LoginPage } from "../lib/pages/login.page";

setup("Login Setup", async ({ page, context }) => {
    // Setup Variables that will be used
    const email = "customer2@practicesoftwaretesting.com";
    const password = "welcome01";
    const usersName = "Jack Howe"
    const customer01AuthFile = ".auth/customer01.json"

    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(email, password);

    await expect(loginPage.navMenu).toContainText(usersName);
    await context.storageState({ path: customer01AuthFile});
});
