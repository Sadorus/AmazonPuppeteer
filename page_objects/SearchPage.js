module.exports = class SearchPage {
  constructor() {
    this.path = 'https://www.amazon.com';
    this.searchPath = 'https://www.amazon.com/s?k=dress&ref=nb_sb_noss_2';
    this.searchInut = 'input[id="twotabsearchtextbox"]';
    this.searchSuggestionQuery = 'dre';
    this.firstSearchSuggestion = 'div[id="issDiv4"]';
    this.searchResultsHeader = 'span[class="a-color-state a-text-bold"]';
    this.searchResultsHeaderFilters = 'span[class="a-color-base a-text-bold"]';
    this.searchQuery = 'Sneakers';
    this.noResultSearchQuery = 'nooooooooooooooooooooooooooooo';
    this.errorMessage = 'div[class="a-section a-spacing-base a-spacing-top-medium"]';
    this.searchGoButton = 'input[class="nav-input"][value="Go"]';
    this.doNotChangeAddressButton = 'div[class="glow-toaster-content"] input[class="a-button-input"][data-action-type="DISMISS"]';
    this.feedbackSection = 'span[data-component-type="s-feedback-slot"]';
    this.featuredRecommendationSection = 'div[class="rhf-frame"][style="display: block;"]';
    this.firstItemFromBranchList = 'ul[aria-labelledby="p_89-title"] li:nth-child(1)';
    this.secondItemFromBranchList = 'ul[aria-labelledby="p_89-title"] li:nth-child(4)';
    this.clearLink = 'a.s-navigation-clear-link';
    this.firstProduct = 'span.a-size-base-plus.a-color-base.a-text-normal';
    this.firstBrandNameCheckbox = 'ul[aria-labelledby="p_89-title"] li:nth-child(1) input[type="checkbox"]';
    this.secondBrandNameCheckbox = 'ul[aria-labelledby="p_89-title"] li:nth-child(4) input[type="checkbox"]';
    this.secondElementFromDepartment = 'div#departments ul li:nth-child(2) span';
    this.searchNavDepartmentLabel = 'span[class="nav-search-label"]';
    this.colorFiltersContainer = 'ul[aria-labelledby="p_n_size_browse-vebin-title"]';
    this.arrowDepartment = 'div#nav-shop span[class="nav-icon nav-arrow"]';
  }
};
