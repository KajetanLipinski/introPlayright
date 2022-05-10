// import {test, expect, webkit, Page} from '@playwright/test';
import {expect} from "@playwright/test";

const BasePage = require('./BasePage');

export class MainPage extends BasePage{
    constructor(page) {
        super(page);
    }

    async createNewEvent() {
        await this.page.mouse.move(100, 100);
        await super.findByXpathAndClickIfElementExist('//*[@id="leadinModal-3189403"]/div[2]/button');
        await this.page.locator('//*[@id="event_list"]/div/div/p/a').click();
        await this.page.locator('button', {hasText: 'Create An Applause Event'}).click();
        await this.page.locator('h3', {hasText: 'Quick Create'}).click();
        await this.page.locator('id=e-name').fill('First day');
        await this.page.locator('button',{hasText: 'Create Event'}).click();
        await this.page.locator('button', {hasText:'Go To Dashboard'}).click();
        await expect(this.page.locator("//*[@id=\"listItem\"]/div[1]/div/h3/span[1]")).toHaveText("First day");
        await this.page.screenshot({ path:`./screenshots/createdEvent.png` });

        console.log("name", "Event created");

   }
    async deleteEvent(){
        await this.page.locator('button',{hasText:'Manage'}).click();
        await this.page.mouse.move(0, 100);
        await this.page.locator('li', {hasText: 'Delete Event'}).click(0,100);
        await this.page.locator('button',{hasText: 'Delete'}).click();
        await this.page.screenshot({ path:`./screenshots/deletedEvent.png` });
        console.log("Event deleted");
    }

}