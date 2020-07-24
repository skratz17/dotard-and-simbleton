import { renderListToDom } from '../list/list.js';
import { useAgents, useAgentsMatchingPropertyValue } from './AgentProvider.js';
import { Agent } from './Agent.js';

const eventHub = document.querySelector('.container');

/**
 * Listen for SearchBar searched event, render filtered agent list when it happens
 */
eventHub.addEventListener('searched', event => {
  const { searchTerm } = event.detail;

  AgentList('agents--found', 'Search Results', 'fullName', searchTerm);
});

/**
 * 
 * @param {String} className The custom className this list should have
 * @param {String} heading The title heading this list should have above it
 * @param {String} property The name of the property this list will be filtered on
 * @param {any} value The value that agent objects should match at the given property to appear in list
 */
export const AgentList = (className, heading, property, value) => {
  const agents = getAgentsList(property, value);

  renderListToDom(className, agents, Agent, heading);
};

/**
 * Given a property and value, return the proper list of agents. If either property or value is undefined or empty, returns all agents. Else, returns only those agents whose value at the given property matches the value argument.
 * @param {String} property
 * @param {String} value 
 */
const getAgentsList = (property, value) => {
  if(!property || !value) return useAgents();

  return useAgentsMatchingPropertyValue(property, value);
};