import { useBusinesses, useBusinessesMatchingCompanyName } from './BusinessProvider.js';
import { Business } from './Business.js';

const businesses = useBusinesses();

// event listener for company name search input element 
document
  .querySelector('.businessSearch')
  .addEventListener('keypress', event => {
    // charCode 13 === 'ENTER' key
    if(event.charCode === 13) {
      renderMatchingBusinesses(event.target.value);
    }
  });

/**
 * Render only those companies whose names match companyName parameter to article.businessList--found DOM node.
 * @param {String} companyName The company name to find matching companies for.
 */
const renderMatchingBusinesses = companyName => {
  const domNode = document.querySelector('.businessList--found');

  const matchingBusinesses = useBusinessesMatchingCompanyName(companyName);

  const matchingBusinessesHTML = matchingBusinesses.map(Business).join('\n');

  domNode.innerHTML = `
    <h2 class="list__heading">Matching Businesses</h2>
    ${matchingBusinessesHTML}
  `;
};

/**
 * Render all businesses to article.businessList--all DOM node.
 */
export const BusinessList = () => {
  const domNode = document.querySelector('.businessList--all');

  let businessesHTML = "";

  businesses.forEach(business => {
    businessesHTML += Business(business);
  });

  domNode.innerHTML += `
    <h2 class="list__heading">Active Businesses</h2>
    ${businessesHTML}
  `;
};

/**
 * Render only businesses in New York to article.businessList--newYork DOM node.
 */
export const BusinessListNewYork = () => {
  const domNode = document.querySelector('.businessList--newYork');

  const newYorkBusinessesHTML = businesses
    .filter(business => business.addressStateCode === 'NY')
    .map(Business)
    .join('\n');

  domNode.innerHTML += `
    <h2 class="list__heading">New York Businesses</h2>
    ${newYorkBusinessesHTML}
  `;
};

/**
 * Render only businesses in Manufacturing to article.businessList--manufacturing DOM node.
 */
export const BusinessListManufacturing = () => {
  const domNode = document.querySelector('.businessList--manufacturing');

  const manufacturingBusinessesHTML = businesses
    .filter(business => business.companyIndustry === 'Manufacturing')
    .map(Business)
    .join('\n');

  domNode.innerHTML += `
    <h2 class="list__heading">Manufacturing Businesses</h2>
    ${manufacturingBusinessesHTML}
  `;
};