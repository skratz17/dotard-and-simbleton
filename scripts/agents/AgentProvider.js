import { useBusinesses } from '../businesses/BusinessProvider.js';

const businesses = useBusinesses();
const agents = businesses.map(business => {
  const { purchasingAgent, phoneWork, companyName } = business;
  const { nameFirst, nameLast } = purchasingAgent;

  const fullName = `${nameFirst} ${nameLast}`;

  return {
    fullName: fullName,
    company: companyName,
    phoneNumber: phoneWork
  };
});

export const useAgents = () => JSON.parse(JSON.stringify(agents));