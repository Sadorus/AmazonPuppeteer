module.exports = class SearchPage {
  constructor() {
    this.path = 'https://www.amazon.com';
    this.searchInut = 'input[id="twotabsearchtextbox"]';
    this.searchSuggestionQuery = 'dre';
    this.firstSearchSuggestion = 'div[id="issDiv4"]';
    this.searchResultsHeader = 'span[class="a-color-state a-text-bold"]';
    this.searchQuery = 'Sneakers';
    this.noResultSearchQuery = 'nooooooooooooooooooooooooooooo';
    this.errorMessage = 'div[class="a-section a-spacing-base a-spacing-top-medium"]';
    this.searchGoButton = 'input[class="nav-input"][value="Go"]';
    this.doNotChangeAddressButton = 'div[class="glow-toaster-content"] input[class="a-button-input"][data-action-type="DISMISS"]';
    this.feedbackSection = 'span[data-component-type="s-feedback-slot"]';
    this.featuredRecommendationSection = 'div[class="rhf-frame"][style="display: block;"]';
  }
};
