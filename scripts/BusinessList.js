import { useBusinesses } from './BusinessProvider.js';
import { Business } from './Business.js';

const domNode = document.querySelector('.container');

export const BusinessList = () => {
  const businesses = useBusinesses();

  let businessesHTML = "";

  businesses.forEach(business => {
    businessesHTML += Business(business);
  });

  domNode.innerHTML += `
    <article class="business-list">
      <h1>Active Businesses</h1>
      ${businessesHTML}
    </article>
  `;
};