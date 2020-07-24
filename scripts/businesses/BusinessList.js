import { useBusinesses, useBusinessesMatchingPropertyValue } from './BusinessProvider.js';
import { Business } from './Business.js';

const eventHub = document.querySelector('.container');

eventHub.addEventListener('searched', event => {
  const { searchTerm } = event.detail;

  renderBusinessesMatchingName(searchTerm);
});

/**
 * 
 * @param {HTMLElement} domNode A reference to the DOM node that you want to add this list's HTML to.
 * @param {Array} businesses An array of business objects.
 * @param {String} listHeading The heading / title that you want for this list.
 */
const renderListToDom = (domNode, businesses, listHeading) => {
  const businessesHTML = businesses.map(Business).join('\n');

  domNode.innerHTML = `
    <h2 class="list__heading">${listHeading}</h2>
    ${businessesHTML}
  `;
};

/**
 * Render only those companies whose names match companyName parameter to article.businesses--found DOM node.
 * @param {String} companyName The company name to find matching companies for.
 */
const renderBusinessesMatchingName = companyName => {
  const domNode = document.querySelector('.businesses--found');

  const matchingBusinesses = useBusinessesMatchingPropertyValue('companyName', companyName);

  renderListToDom(domNode, matchingBusinesses, 'Matching Businesses');
};

/**
 * Render all businesses to article.businesses--all DOM node.
 */
export const BusinessList = () => {
  const domNode = document.querySelector('.businesses--all');

  const businesses = useBusinesses();

  renderListToDom(domNode, businesses, 'All Businesses');
};

/**
 * Render only businesses in New York to article.businesses--newYork DOM node.
 */
export const BusinessListNewYork = () => {
  const domNode = document.querySelector('.businesses--newYork');

  const newYorkBusinesses = useBusinessesMatchingPropertyValue('addressStateCode', 'NY');

  renderListToDom(domNode, newYorkBusinesses, 'New York Businesses');
};

/**
 * Render only businesses in Manufacturing to article.businesses--manufacturing DOM node.
 */
export const BusinessListManufacturing = () => {
  const domNode = document.querySelector('.businesses--manufacturing');

  const manufacturingBusinesses = useBusinessesMatchingPropertyValue('companyIndustry', 'Manufacturing');

  renderListToDom(domNode, manufacturingBusinesses, 'Manufacturing Businesses');
};