const puppeteer = require('puppeteer');
const SearchPage = require('../page_objects/SearchPage');
// eslint-disable-next-line prefer-destructuring
const getText = require('../lib/helpers').getText;

const searchPage = new SearchPage();

beforeEach(async () => {
  browser = await puppeteer.launch({
    headless: true,
  });
  page = await browser.newPage();
  await page.goto(searchPage.path);
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
