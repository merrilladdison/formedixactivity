const {expect} = require('@playwright/test')

exports.LoginPage = class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameField = page.getByLabel('Username / email address');
        this.passwordField = page.getByLabel('Password');
        this.signinBtn = page.getByRole('button', { name: 'SIGN IN' });
    }

    async enterUsername(username) {
        await this.usernameField.fill(username)
    }
    async enterPassword(password) {
        await this.passwordField.fill(password)
    }
    async signinBtnIsEnabled() {
        await expect(this.signinBtn).toBeEnabled()
    }
    async clickSigninBtn(){
        await this.signinBtn.click()
    }
    async signinBtnIsVisible() {
        await expect(this.signinBtn).toBeVisible()
    }
}