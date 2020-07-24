import { SearchBar } from './searchBar/SearchBar.js';
import { BusinessList } from './businesses/BusinessList.js';

SearchBar('business-search', 'Enter business name...');
BusinessList('businesses--all', 'All Businesses');
BusinessList('businesses--newYork', 'New York Businesses', 'addressStateCode', 'NY');
BusinessList('businesses--manufacturing', 'Manufacturing Businesses', 'companyIndustry', 'manufacturing');