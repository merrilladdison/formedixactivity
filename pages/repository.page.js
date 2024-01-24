const {expect} = require('@playwright/test');
const { text } = require('stream/consumers');


exports.RepositoryPage = class RepositoryPage {
    constructor(page) {
        this.page = page;
        this.repositoryBtn = page.locator('#menuMdb div').filter({ hasText: 'Repository' });
        this.studiesBtn = page.locator('#menuMdbStudies');
        this.studiesTitle = page.getByTitle('Studies');
        this.techStudy = page.getByText('Tech Study');
        this.menuBtn = page.locator('#fdxMdbContainerTableItem0MenuToggle');
        this.viewBtn = page.getByText('View', { exact: true });
        this.usericonBtn = page.getByText('testteamtechtest', { exact: true });
        this.signOutBtn = page.getByText('Sign out', { exact: true });
        this.techStudyView = page.getByText('Tech Study Draft - ver. 2 ver');
        this.dataAcquisitionBtn = page.locator('#ViewAssetGroupdataAcquisition');
        this.dataAcquisitionView = page.locator('#crumb-agDetails')
        this.formsViewBtn = page.locator('#FORMTypeView');
        this.formsView = page.locator('#crumb-assetDetails');
        this.medicalHistoryBtn = page.locator('#virtualScrollCanvas div').filter({ hasText: 'Medical History Medical' }).nth(2);
        this.editFormBtn = page.getByRole('button', { name: ' Edit form' });
        this.descriptionLabel = page.locator('#editPropsdescriptionLabel');
        this.addBtn = page.locator('#editPropsAddEntrydescription');
        this.descriptionField = page.locator('#assetLocaleEditTextTextareadescription').first();
        this.updateBtn = page.getByRole('button', { name: 'Update' });
        this.descriptionText = page.getByText('TEST MERRILL');
        this.closeEditBtn = page.getByRole('button', { name: ' Close edit' });
        this.localeField = page.locator('#localeInputdescription').first();
        this.propertiesDescription = page.getByText('Test123 TEST MERRILL');
    }
    async repositoryBtnIsEnabled() {
        await expect(this.repositoryBtn).toBeEnabled()
    }
    async clickRepositoryBtn(){
        await this.repositoryBtn.click()
    }
    async studiesBtnIsEnabled() {
        await expect(this.studiesBtn).toBeEnabled()
    }
    async studiesBtnClick(){
        await this.studiesBtn.click()
    }
    async studiesTitleIsVisible() {
        await expect(this.studiesTitle).toBeVisible()
    }
    async techStudyIsVisible(){
        await expect(this.techStudy).toBeVisible()
    }
    async menuBtnIsEnabled() {
        await expect(this.menuBtn).toBeEnabled()
    }
    async menutBtnClick(){
        await this.menuBtn.click()
    }
    async viewBtnIsVisible(){
        await expect(this.viewBtn).toBeVisible()
    }
    async viewBtnClick(){
        await this.viewBtn.click()
    }
    async techStudyViewIsVisible(){
        await expect(this.techStudyView).toBeVisible()
    }
    async dataAcquisitionBtnIsVisible(){
        await expect(this.dataAcquisitionBtn).toBeVisible()
    }
    async dataAcquisitionBtnClick(){
        await this.dataAcquisitionBtn.click()
    }
    async dataAcquisitionViewIsVisible() {
        await expect(this.dataAcquisitionView).toBeVisible()
    }
    async formsViewBtnIsVisible() {
        await expect(this.formsViewBtn).toBeVisible()
    } 
    async formsViewBtnClick(){
        await this.formsViewBtn.click()
    }
    async formsViewIsVisible() {
        await expect(this.formsView).toBeVisible()
    }
    async medicalHistoryBtnIsVisible() {
        await expect(this.medicalHistoryBtn).toBeVisible()
    }
    async medicalHistoryBtnClick() {
        await this.medicalHistoryBtn.click()
    }
    async editFormBtnIsVisible() {
        await expect(this.editFormBtn).toBeVisible()
    }
    async editFormBtnIsEnabled() {
        await expect(this.editFormBtn).toBeEnabled()
    }
    async editFormBtnClick() {
        await this.editFormBtn.click()
    }
    async descriptionLabelIsVisible() {
        await expect(this.descriptionLabel).toBeVisible()
    }
    async addBtnIsVisibile() {
        await expect(this.addBtn).toBeVisible()
    }
    async addBtnClick() {
        await this.addBtn.click()
    }
    async descriptionFieldIsEditable() {
        await expect(this.descriptionField).toBeEditable()
    }
    async inputDescriptionField(description) {
        await this.descriptionField.fill(description)
    }
    async updateBtnIsEnabled(){
        await expect(this.updateBtn).toBeEnabled()
    }
    async updateBtnClick() {
        await this.updateBtn.click()
    }
    async descriptionTextIsVisible() {
        await expect(this.descriptionText).toBeVisible()
    }
    async closeEditBtnIsEnabled() {
        await expect(this.closeEditBtn).toBeEnabled()
    }
    async closeEditBtnClick() {
        await this.closeEditBtn.click()
    }
    async localeFieldIsEditable() {
        await expect(this.localeField).toBeEditable()
    }
    async inputLocaleField(locale) {
        await this.localeField.fill(locale)
    }
    async propertiesDescriptionIsVisible(){
        await expect(this.propertiesDescription).toBeVisible()
    }
    async userIconIsVisible(){
        await expect(this.usericonBtn).toBeVisible()
    }
    async userIconHover(){
        await this.usericonBtn.hover()
    }
    async signOutBtnClick() {
        await this.signOutBtn.click()
    }




}