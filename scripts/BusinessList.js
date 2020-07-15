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
    <h1>Active Businesses</h1>
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
    <h1>New York Businesses</h1>
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
    <h1>Manufacturing Businesses</h1>
    ${manufacturingBusinessesHTML}
  `;
};