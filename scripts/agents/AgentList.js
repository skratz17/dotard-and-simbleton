import { useAgents, useAgentsMatchingPropertyValue } from './AgentProvider.js';
import { Agent } from './Agent.js';

const eventHub = document.querySelector('.container');
const container = document.querySelector('.container');

eventHub.addEventListener('searched', event => {
  const { searchTerm } = event.detail;

  // renderMatchingAgents(searchTerm);

  AgentListWhere('agents--found', 'Search Results', 'fullName', searchTerm);
});

/**
 * 
 * @param {HTMLElement} domNode A reference to the DOM node that you want to add this list's HTML to.
 * @param {Array} agents An array of agent objects.
 * @param {String} listHeading The heading / title that you want for this list.
 */
const renderListToDom = (domNode, agents, listHeading) => {
  const agentsHTML = agents.map(Agent).join('\n');

  domNode.innerHTML = `
    <h2 class="list__heading">${listHeading}</h2>
    ${agentsHTML}
  `; 
};

export const AgentListWhere = (className, heading, property, value) => {
  let domNode = document.querySelector(`.${className}`);
  if(!domNode) {
    domNode = createListArticleNode(className);
    container.appendChild(domNode);
  }

  const agents = getAgentsList(property, value);

  renderListToDom(domNode, agents, heading);
};

/**
 * Create and return an <article> DOM node with classes 'list' and className
 * @param {String} className The custom class name to give the element
 */
const createListArticleNode = className => {
  const domNode = document.createElement('ARTICLE');
  domNode.classList.add('list');
  domNode.classList.add(className);
  return domNode;
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