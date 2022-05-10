import type { Page } from '@playwright/test';
import {expect} from "@playwright/test";
const BasePage = require('./BasePage');


export class HomePage extends BasePage{
    constructor(page) {
        super(page);
    }
    async open() {
        await super.navigate('/home')
        console.log("Opened https://applause.stream/home");
        const title = this.page.locator('.navbar__inner .navbar__title');
        await expect(this.page).toHaveTitle(/Applause/);
        await this.page.screenshot({ path:`./screenshots/homePageWithoutLogin.png` });
    }

    async goToLoginViaZoom(){
        console.log("Go to Zoom pop up for authenticate");
        await this.page.locator('a', { hasText: 'For Artists' }).click();
        await this.page.locator('button', { hasText: 'Sign In' }).click();
        await this.page.locator('button', { hasText: 'Got It!' }).click();
    }
}