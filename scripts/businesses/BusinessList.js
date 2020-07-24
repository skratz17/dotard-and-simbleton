import { useBusinesses, useBusinessesMatchingPropertyValue } from './BusinessProvider.js';
import { Business } from './Business.js';

const eventHub = document.querySelector('.container');
const container = document.querySelector('.container');

eventHub.addEventListener('searched', event => {
  const { searchTerm } = event.detail;

  BusinessListWhere('businesses--found', 'Search Results', 'companyName', searchTerm);
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
 * Render a business list for all those businesses whose given property matches the given value.
 * If a DOM node with class of className is not found on DOM, it will be appended to .container. Otherwise, the innerHTML of the existing DOM node with given className will be updated with new list.
 * @param {String} className Class name that the list should use.
 * @param {String} heading The heading that should display above the list
 * @param {String} property The name of the property to render a list filtered by
 * @param {String} value The value that the property should search on
 */
export const BusinessListWhere = (className, heading, property, value) => {
  let domNode = document.querySelector(`.${className}`);
  if(!domNode) {
    domNode = createListArticleNode(className);
    container.appendChild(domNode);
  }
  
  const businesses = getBusinessList(property, value);

  renderListToDom(domNode, businesses, heading);
};

/**
 * Create and return an <article> DOM node with classes 'list' and className
 * @param {String} className The custom class name to give the element
 */
const createListArticleNode = className => {
  const domNode = document.createElement('ARTICLE');
  domNode.classList.add('list');
  domNode.classList.add(className);
  return domNode;
};

/**
 * Given a property and value, return the proper list of businesses. If either property or value is undefined or empty, returns all businesses. Else, returns only those businesses whose value at the given property matches the value argument.
 * @param {String} property
 * @param {String} value 
 */
const getBusinessList = (property, value) => {
  if(!property || !value) return useBusinesses();

  return useBusinessesMatchingPropertyValue(property, value);
}