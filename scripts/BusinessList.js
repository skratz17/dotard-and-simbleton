import { useBusinesses } from './BusinessProvider.js';
import { Business } from './Business.js';


export const BusinessList = () => {
  const domNode = document.querySelector('.businessList--all');

  const businesses = useBusinesses();

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

  const businesses = useBusinesses();

  const newYorkBusinessesHTML = businesses
    .filter(business => business.addressStateCode === 'NY')
    .map(Business)
    .join('\n');

  domNode.innerHTML += `
    <h1>New York Businesses</h1>
    ${newYorkBusinessesHTML}
  `;
}