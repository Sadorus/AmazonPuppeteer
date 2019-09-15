const puppeteer = require('puppeteer');
const SearchPage = require('../../page_objects/SearchPage');
// eslint-disable-next-line prefer-destructuring
const getText = require('../../lib/helpers').getText;
// eslint-disable-next-line prefer-destructuring
const scrollToElement = require('../../lib/helpers').scrollToElement;

const searchPage = new SearchPage();

beforeEach(async () => {
  browser = await puppeteer.launch({
    headless: true,
    timeout: 7000,
    slowMo: 0,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
    ],
  });
  page = await browser.newPage();
  jest.setTimeout(30000);
  await page.goto(searchPage.path);
  // This code is related to the popup, which is showing dependent on your geolocalization
  await page.waitForSelector(searchPage.doNotChangeAddressButton);
  await page.click(searchPage.doNotChangeAddressButton);
});

afterEach(async () => {
  await browser.close();
});

describe('Search suggestions should be present', () => {
  it('Check if search suggestion is visible', async () => {
    await page.type(searchPage.searchInut, searchPage.searchSuggestionQuery);
    const searchSuggestionText = await getText(page, searchPage.firstSearchSuggestion);
    await page.click(searchPage.firstSearchSuggestion);
    const searchResultsHeaderText = await getText(page, searchPage.searchResultsHeader);
    expect(searchResultsHeaderText).toContain(searchSuggestionText);
  });
});
describe('Search functionality', () => {
  it('Search for specific product', async () => {
    await page.type(searchPage.searchInut, searchPage.searchQuery);
    await page.click(searchPage.searchGoButton);
    const searchResultsHeaderText = await getText(page, searchPage.searchResultsHeader);
    const pageUrl = await page.url();
    expect(pageUrl).toContain(searchPage.searchQuery);
    expect(searchResultsHeaderText).toContain(searchPage.searchQuery);
  });
});
describe('Should show error message', () => {
  it('Search for not existing product', async () => {
    await page.type(searchPage.searchInut, searchPage.noResultSearchQuery);
    await page.click(searchPage.searchGoButton);
    const searchResultsErrorMessage = await getText(page, searchPage.errorMessage);
    const pageUrl = await page.url();
    expect(pageUrl).toContain(searchPage.noResultSearchQuery);
    expect(searchResultsErrorMessage).toContain(`No results for ${searchPage.noResultSearchQuery}`);
  });
});

describe('Testing featured recommendations section', () => {
  it('Featured recommendations section should be visible after scrolling to the bottom of page', async () => {
    await page.type(searchPage.searchInut, searchPage.searchQuery);
    await page.click(searchPage.searchGoButton);
    await page.waitForSelector(searchPage.feedbackSection);
    await scrollToElement(page, searchPage.feedbackSection);
    await page.waitForSelector(searchPage.featuredRecommendationSection);
  });
});
