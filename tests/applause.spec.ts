import { test } from '@playwright/test';
import {MainPage} from "../pages/MainPage";
import {LoginPage} from "../pages/LoginPage";
import {HomePage} from "../pages/HomePage";
import config from "../playwright.config";

test.beforeEach(async ({ page }) => {
  // Runs before each test and signs in each page.
  const consoleLogs = [];
  page.on("console", msg => {
    if (msg.type() == "error") {
      console.log(msg.text());
      consoleLogs.push(msg.text());
    }
  });
  const homePage = new HomePage(page);
  await homePage.open();
  await homePage.goToLoginViaZoom();
  const loginPage = new LoginPage(page);
  await loginPage.handleZoomPopUpAndSendFilledForm();
});

test('create event', async ({page}) => {
  const mainPage = new MainPage(page);
  await mainPage.createNewEvent();
});

test('remove event', async ({page})=>{
  const mainPage = new MainPage(page);
  await mainPage.deleteEvent();
})



