import { useAgents } from './AgentProvider.js';
import { Agent } from './Agent.js';

export const AgentList = () => {
  const domNode = document.querySelector('.agents');

  const agents = useAgents();

  const agentsHTML = agents.map(Agent).join('\n');

  domNode.innerHTML += `
    <h2 class="list__heading">Purchasing Agents</h2>
    ${agentsHTML}
  `;
};