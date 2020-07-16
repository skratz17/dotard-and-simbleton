import { useBusinesses } from '../businesses/BusinessProvider.js';

const businesses = useBusinesses();

const agents = businesses.map(business => {
  const { purchasingAgent, phoneWork, companyName } = business;
  const { nameFirst, nameLast } = purchasingAgent;

  const fullName = `${nameFirst} ${nameLast}`;

  return {
    firstName: nameFirst,
    lastName: nameLast,
    fullName: fullName,
    company: companyName,
    phoneNumber: phoneWork
  };
});

/**
 * Return an array of all agents.
 */
export const useAgents = () => JSON.parse(JSON.stringify(agents));

/**
 * Return a filtered array of only those agents whose values at the given property value match the given value (case-insensitive, using String.includes() matching)
 * @param {String} property The name of the property to search on
 * @param {String} value The value of that property to match on
 */
export const useAgentsMatchingPropertyValue = (property, value) => {
  const matchingAgents = agents.filter(agent => 
    agent[property]
      .toLowerCase()
      .includes(value.toLowerCase())
  );

  return JSON.parse(JSON.stringify(matchingAgents));
};