import { SearchBar } from './searchBar/SearchBar.js';
import { BusinessListWhere } from './businesses/BusinessList.js';

SearchBar('business-search', 'Enter business name...');
BusinessListWhere('businesses--all', 'All Businesses');
BusinessListWhere('businesses--newYork', 'New York Businesses', 'addressStateCode', 'NY');
BusinessListWhere('businesses--manufacturing', 'Manufacturing Businesses', 'companyIndustry', 'manufacturing');