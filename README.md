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
```
node --version
```
2. Then go to your development folder to install playwright with command below:
```
npm init playwright@latest
```
* > ** If npm does not work, (For Windows) open powershell and run the command below, then rerun the npm installation.
```
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```
3. Once everything installed successfully, run the command below to verify the installations and the functionality of the playwright executions.
```
npx playwright test
```
4. Install VSCode if not yet installed from https://code.visualstudio.com/ then open in VSCode your development folder.
5. Then install following VSCode Extensions: (Optional only)
```
- Playwright Test for VSCode (by Microsoft)
```

## Configs
---
- playwright.config.ts

## Command Line Scripts
---
Default playwright command line script:
- ```npx playwright test```
---
However, if it is encoded under ```package.json``` as follows:
```
  "scripts": {
    "test": "npx playwright test"
  },
```
Then we can use a shortcut command line script of:
- ```npm run test```
---
Using tagging for test cases, we can add "tag" in tests itself as follows:
```
test('get started link', {tag: "@first"}, async ({ page }) => {
```
Then it can be executed in command line thru:

(windows)
- ```npx playwright test --grep first```

(ios)
- ```npx playwright test --grep @first```
---
For debugging, we can use:
- ```npx playwright test --ui```
---
For code generation for tests, we can use:
- ```npx playwright codegen```

## Locator Strategies
---
These are the page locator strategies recommended by Playwright Dev Team
- ```page.getByRole()```
- ```page.getByText()```
- ```page.getByLabel()```
- ```page.getByPlaceholder()```
- ```page.getByAltText()```
- ```page.getByTitle()```
- ```page.getByTestId()```




