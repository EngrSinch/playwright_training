# Playwright Training

## Resources
---
- [Playwright Website](https://playwright.dev/)
- [Playwright Github](https://github.com/microsoft/playwright)
- [NodeJs Downloads](https://nodejs.org/en/download)
- [VSCode Downloads](https://code.visualstudio.com/)


## Installation
---
1. Download and Install Node.js at this url 
https://nodejs.org/en/download then verify if successfully installed by opening new terminal and run below command:
    - ```node --version```
2. Then go to your development folder to install playwright with command below:
    - ```npm init playwright@latest```
    * > If npm does not work, (For Windows) open powershell and run the command below, then rerun the npm installation.
    - ```Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser```
3. Once everything installed successfully, run the command below to verify the installations and the functionality of the playwright executions.
    - ```npx playwright test```
4. Install VSCode if not yet installed from https://code.visualstudio.com/ then open in VSCode your development folder.
5. Then install following VSCode Extensions: (Optional only)
    - > Playwright Test for VSCode (by Microsoft)


## Configs
---
- playwright.config.ts


## Command Line Scripts
---
Default playwright command line script:
  - ```npx playwright test```

However, if it is encoded under ```package.json``` as follows:
  - ```
    "scripts": {
      "test": "npx playwright test"
    },
    ```
Then we can use a shortcut command line script of:
  - ```npm run test```

Using tagging for test cases, we can add "tag" in tests itself as follows:
  - ```
    test('get started link', {tag: "@first"}, async ({ page }) => {
      ****
    });
    ```
Then it can be executed in command line thru:
- (windows)
  - ```npx playwright test --grep first```
- (ios)
  - ```npx playwright test --grep @first```

For debugging, we can use:
  - ```npx playwright test --ui```

For code generation for tests, we can use:
  - ```npx playwright codegen```

For generating screenshots/snapshots for visual tests
  - ```npx playwright test tests/home.spec.ts --update-snapshots```


## Locator Strategies
---
### Recommended Strategies
These are the page locator strategies recommended by Playwright Dev Team

- ```page.getByRole()```
  - ```await page.getByRole('button',{name: 'Sign in!'}).click();```
- ```page.getByText()```
  - ```await expect(page.getByText('Jane Doe')).toBeVisible();```
- ```page.getByLabel()```
  - ```await page.getByLabel('username').fill('email@test.com');```
- ```page.getByPlaceholder()```
- ```page.getByAltText()```
- ```page.getByTitle()```
- ```page.getByTestId()```
  - using custom test attribute where using custom test attribute under 
    ```playwright.config.ts```
    ```
    use: {
      /* Custom test attribute */
      testIdAttribute: "data-test",
    },
    ```
  - from
    ```await page.locator('[data-test="nav-sign-in"]').click();```
  - to
    ```await page.getByTestId('nav-sign-in').click();```
---
### Legacy Strategies
- page locators (legacies)
  - data test id
    ```await page.locator('[data-test="nav-sign-in"]').click();```
  - using css locators
    ```await page.locator('css=button').click();```
  - css and matching text
    ```await page.locator('article:hastext("Playwright")').click();```
  - Using OR
    ```await page.locator('button:has-text("Log in"), button:has-text("Sign in")').click();```
  - Using Xpath
    ```await page.locator('xpath=//button').click();```


## Assertions
---
Full List: [TestAssetions](https://playwright.dev/docs/test-assertions)

### Locator Assertions
These assertions will be retried up until timeout.

examples
```
  await expect(locator).toBeVisible();
  await expect(locator).toContainText();
  await expect(locator).toHaveCount();
  await expect(locator).toHaveURL();
```

### Value Assertions
These assertions will be checked only once.

examples
```
  expect(value).toBe();
  expect(value).toContain();
  expect(value).toEqual();
  expect(value).toHaveLength();
```


