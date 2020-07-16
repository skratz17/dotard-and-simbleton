import { useBusinesses } from './BusinessProvider.js';
import { Business } from './Business.js';

const businesses = useBusinesses();

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