import { useBusinesses, useBusinessesMatchingPropertyValue } from './BusinessProvider.js';
import { Business } from './Business.js';


const renderListToDom = (domNode, businesses, listHeading) => {
  const businessesHTML = businesses.map(Business).join('\n');

  domNode.innerHTML = `
    <h2 class="list__heading">${listHeading}</h2>
    ${businessesHTML}
  `;
};

// event listener for company name search input element 
document
  .querySelector('.business-search')
  .addEventListener('keypress', event => {
    // charCode 13 === 'ENTER' key
    if(event.charCode === 13) {
      renderMatchingBusinesses(event.target.value);
    }
  });

/**
 * Render only those companies whose names match companyName parameter to article.businesses--found DOM node.
 * @param {String} companyName The company name to find matching companies for.
 */
const renderMatchingBusinesses = companyName => {
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