import { test, expect } from "@playwright/test";

test.describe("Home page with no auth", () => {
    test.beforeEach(async ({page}) => {
        // Go to the website
        await page.goto("https://practicesoftwaretesting.com");
    });
    test("visual test", async ({page}) => {
        // Waits for all networks to finish before proceeding with the next command
        await page.waitForLoadState("networkidle");
        // Compares the screenshots
        await expect(page).toHaveScreenshot("home-page-no-auth.png");
        // Masks some locators in the screenshot to focus on them
        await expect(page).toHaveScreenshot("home-page-no-auth-2.png", {mask: [page.getByTitle("Practice Software Testing - Toolshop")]});
    });
    test("Check Sign In", async ({page}) => {
        // Ensure the sign-in link is present
        await expect(page.getByTestId("nav-sign-in")).toHaveText("Sign in");
    });
    test("Validate Page Title", async ({page}) => {
        // Check the tile of the page
        await expect(page).toHaveTitle("Practice Software Testing - Toolshop - v5.0")
    });
    test("Grid Loads with 9 items", async ({page}) => {
        // Check the count of items displayed
        const productGrid = page.locator(".col-md-9");
        // locator assertion
        await expect(productGrid.getByRole("link")).toHaveCount(9);
        // non-locator assertion
        expect(await productGrid.getByRole("link").count()).toBe(9);
    });
    test("search for thor hammer", async ({page}) => {
        // Check the count of items displayed
        const productGrid = page.locator(".col-md-9");
        // Search for Thor Hammer and check the results
        await page.getByTestId("search-query").fill("Thor Hammer");
        await page.getByTestId("search-submit").click();
        await expect(productGrid.getByRole("link")).toHaveCount(1);
        await expect(page.getByAltText("Thor Hammer")).toBeVisible();
    });
});


test.describe("Home page customer 01 auth", () => {
    test.use({ storageState: ".auth/customer01.json"});
    test.beforeEach(async ({page}) => {
        // Go to the website
        await page.goto("https://practicesoftwaretesting.com");
    });
    test("visual test authorized", async ({page}) => {
        // Waits for all networks to finish before proceeding with the next command
        await page.waitForLoadState("networkidle");
        // Compares the screenshots
        await expect(page).toHaveScreenshot("home-page-customer01.png");
        // Masks some locators in the screenshot to focus on them
        await expect(page).toHaveScreenshot("home-page-customer01-2.png", {mask: [page.getByTitle("Practice Software Testing - Toolshop")]});
    });
    test("check customer 01 is signed in", async ({page}) => {
        await expect(page.getByTestId("nav-sign-in")).not.toBeVisible();
        await expect(page.getByTestId("nav-menu")).toContainText("Jane Doe");
    });
});
