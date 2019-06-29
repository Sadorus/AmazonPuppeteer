const puppeteer = require('puppeteer');
const SearchPage = require('../../page_objects/SearchPage');
// eslint-disable-next-line prefer-destructuring
const getText = require('../../lib/helpers').getText;

const searchPage = new SearchPage();

beforeEach(async () => {
  browser = await puppeteer.launch({
    headless: false,
    timeout: 10000,
    slowMo: 0,
    defaultViewport: null,
  });
  page = await browser.newPage();
  await page.goto(searchPage.searchPath);
  // This code is related to the popup, which is showing dependent on your geolocalization
  await page.waitForSelector(searchPage.doNotChangeAddressButton);
  await page.click(searchPage.doNotChangeAddressButton);
});

afterEach(async () => {
  await browser.close();
});

describe('Brand filter functionality', () => {
  it('Product should be releated to selected branch', async () => {
    const firstBrandName = await getText(page, searchPage.firstItemFromBranchList);
    await page.click(searchPage.firstBrandNameCheckbox);
    await page.waitForSelector(searchPage.clearLink);
    const firstProductName = await getText(page, searchPage.firstProduct);
    expect(firstProductName).toContain(firstBrandName);
  });
  it('Should be possible to pick more than one filter', async () => {
    const firstBrandName = await getText(page, searchPage.firstItemFromBranchList);
    await page.click(searchPage.firstBrandNameCheckbox);
    await page.waitForSelector(searchPage.arrowDepartment, {
      visible: true,
    });
    const secondBrandName = await getText(page, searchPage.secondItemFromBranchList);
    await page.click(searchPage.secondBrandNameCheckbox);
    await page.waitForSelector(searchPage.arrowDepartment, {
      visible: true,
    });
    const searchResultHeaderText = await getText(page, searchPage.searchResultsHeaderFilters);
    expect(searchResultHeaderText).toContain(firstBrandName);
    expect(searchResultHeaderText).toContain(secondBrandName);
  });
});

describe('Department navigation functionality', () => {
  it('Should land on first department from list', async () => {
    const departmentName = await getText(page, searchPage.secondElementFromDepartment);
    await page.click(searchPage.secondElementFromDepartment);
    await page.waitForSelector(searchPage.colorFiltersContainer);
    const searchNavDepartmentName = await getText(page, searchPage.searchNavDepartmentLabel);
    expect(searchNavDepartmentName).toContain(departmentName);
  });
});
