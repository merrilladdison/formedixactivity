// @ts-nocheck
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login.page');
const { RepositoryPage } = require('../pages/repository.page');

test.beforeEach(async ({ page }) => {
    //Login to the application using
    await page.goto('https://ryze-staging.formedix.com/sign-in')
    const loginPage = new LoginPage(page);
    await loginPage.enterUsername('testteamtechtest')
    await loginPage.enterPassword('Ryz3T3st!x3')
    await loginPage.signinBtnIsEnabled()
    await loginPage.clickSigninBtn()
});

test.afterEach(async ({ page }) => {
    //Verify Logout screen
    const loginPage = new LoginPage(page);
    await loginPage.signinBtnIsVisible()
});

test('Repository - Tech Study', async ({ page }) => {
    //Navigate to ‘Repository->Studies’
    const repositoryPage = new RepositoryPage(page);
    await repositoryPage.repositoryBtnIsEnabled()
    await repositoryPage.clickRepositoryBtn()
    await repositoryPage.studiesBtnIsEnabled()
    await repositoryPage.studiesBtnClick()
    await repositoryPage.studiesTitleIsVisible()
    await repositoryPage.techStudyIsVisible()
    //Confirm the options on the ‘Tech Study’ menu (three bar button on the right hand side).
    await repositoryPage.menuBtnIsEnabled()
    await repositoryPage.menutBtnClick()
    await repositoryPage.viewBtnIsVisible()
    //Enter the tech test study view.
    await repositoryPage.viewBtnClick()
    await repositoryPage.techStudyViewIsVisible()
    //Enter the ‘Data acquisition’ asset group view.
    await repositoryPage.dataAcquisitionBtnIsVisible()
    await repositoryPage.dataAcquisitionBtnClick()
    await repositoryPage.dataAcquisitionViewIsVisible()
    //Select to view ‘Forms’.
    await repositoryPage.formsViewBtnIsVisible()
    await repositoryPage.formsViewBtnClick()
    await repositoryPage.formsViewIsVisible()
    //Select to view the ‘Medical History’ form.
    await repositoryPage.medicalHistoryBtnIsVisible()
    await repositoryPage.medicalHistoryBtnClick()
    //Select to edit the form by adding a ‘Description’ property to the form.
    await repositoryPage.editFormBtnIsVisible()
    await repositoryPage.editFormBtnIsEnabled()
    await repositoryPage.editFormBtnClick()
    await repositoryPage.descriptionLabelIsVisible()
    await repositoryPage.addBtnIsVisibile()
    await repositoryPage.addBtnClick()
    await repositoryPage.descriptionFieldIsEditable()
    await repositoryPage.inputDescriptionField('TEST MERRILL')
    await repositoryPage.localeFieldIsEditable()
    await repositoryPage.inputLocaleField('Test123')
    //Save the change.
    await repositoryPage.updateBtnIsEnabled()
    await repositoryPage.updateBtnClick()
    //Confirm the user update has been preserved on the property panel, and on the main form view. 
    await repositoryPage.descriptionTextIsVisible()
    await repositoryPage.closeEditBtnIsEnabled()
    await repositoryPage.closeEditBtnClick()
    await repositoryPage.propertiesDescriptionIsVisible()
    //Confirm the user is able to logout
    await repositoryPage.userIconIsVisible()
    await repositoryPage.userIconHover()
    await repositoryPage.signOutBtnClick()



  });




