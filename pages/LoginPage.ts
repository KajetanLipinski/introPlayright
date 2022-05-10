import {Page} from '@playwright/test';
const BasePage = require('./BasePage');

export class LoginPage extends BasePage{
    constructor(page) {
        super(page);
    }

    async handleZoomPopUpAndSendFilledForm(){
        const [popup] = await Promise.all([
            this.page.waitForEvent('popup'),
        ]);
        console.log("Pop up was opened");
        await popup.locator('id=onetrust-accept-btn-handler').click();
        console.log("Condition was accepted");
        await this.fillLoginForm(popup);
        await popup.locator(`//*[@id="login-form"]/div[4]/div/div[1]/button`).click();
    }
    async fillLoginForm(popup){
        await popup.locator('id=email').fill('luydohalme@vusra.com');
        await popup.locator('id=password').fill('Tester123');
        await popup.screenshot({ path:`./screenshots/login.png` });
        console.log("Filled email() and password");
    }
}