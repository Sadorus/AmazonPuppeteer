module.exports = {
  getText: async (page, selector) => {
    try {
      await page.waitForSelector(selector);
      return page.$eval(selector, element => element.innerText);
    } catch (error) {
      throw new Error(`Cannot get text from selector: ${selector}`);
    }
  },
  scrollToElement: async (page, selector) => {
    try {
      await page.waitForSelector(selector);
      return page.$eval(selector, element => element.scrollIntoView());
    } catch (error) {
      throw new Error(`Cannot scroll to selector: ${selector}`);
    }
  },
};
