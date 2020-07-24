import { renderListToDom, createListArticleNode } from '../list/list.js';
import { useAgents, useAgentsMatchingPropertyValue } from './AgentProvider.js';
import { Agent } from './Agent.js';

const eventHub = document.querySelector('.container');
const container = document.querySelector('.container');

eventHub.addEventListener('searched', event => {
  const { searchTerm } = event.detail;

  AgentListWhere('agents--found', 'Search Results', 'fullName', searchTerm);
});

export const AgentListWhere = (className, heading, property, value) => {
  let domNode = document.querySelector(`.${className}`);
  if(!domNode) {
    domNode = createListArticleNode(className);
    container.appendChild(domNode);
  }

  const agents = getAgentsList(property, value);

  renderListToDom(domNode, agents, Agent, heading);
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