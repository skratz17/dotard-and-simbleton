import { renderListToDom } from '../list/list.js';
import { useBusinesses, useBusinessesMatchingPropertyValue } from './BusinessProvider.js';
import { Business } from './Business.js';

const eventHub = document.querySelector('.container');

/**
 * Listen for the SearchBar searched event, render list filtered on search criteria when it happens
 */
eventHub.addEventListener('searched', event => {
  const { searchTerm } = event.detail;

  BusinessList('businesses--found', 'Search Results', 'companyName', searchTerm);
});

/**
 * Render a business list for all those businesses whose given property matches the given value.
 * If a DOM node with class of className is not found on DOM, it will be appended to .container. Otherwise, the innerHTML of the existing DOM node with given className will be updated with new list.
 * @param {String} className Class name that the list should use.
 * @param {String} heading The heading that should display above the list
 * @param {String} property The name of the property to render a list filtered by
 * @param {String} value The value that the property should search on
 */
export const BusinessList = (className, heading, property, value) => {
  const businesses = getBusinessList(property, value);

  renderListToDom(className, businesses, Business, heading);
};

/**
 * Given a property and value, return the proper list of businesses. If either property or value is undefined or empty, returns all businesses. Else, returns only those businesses whose value at the given property matches the value argument.
 * @param {String} property
 * @param {String} value 
 */
const getBusinessList = (property, value) => {
  if(!property || !value) return useBusinesses();

  return useBusinessesMatchingPropertyValue(property, value);
};