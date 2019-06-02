module.exports = class SearchPage {
  constructor() {
    this.path = 'https://www.amazon.com';
    this.searchInut = 'input[id="twotabsearchtextbox"]';
    this.searchSuggestionQuery = 'dre';
    this.firstSearchSuggestion = 'div[id="issDiv0"]';
    this.searchResultsHeader = 'span[class="a-color-state a-text-bold"]';
    this.searchQuery = 'Sneakers';
    this.searchGoButton = 'input[class="nav-input"][value="Go"]';
  }
};
