import {Page, Browser} from '@playwright/test';

class BasePage{
    readonly page: Page;
    constructor(page) {
        this.page = page;
    }
    async navigate(path){
        await this.page.goto(`https://applause.stream${path}`);
    }
    async findByXpathAndClickIfElementExist(xpath){
        const element = await this.page.locator(xpath);
        if (element) {
            element.click();
        }
    }
}
module.exports = BasePage;