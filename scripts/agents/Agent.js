import escape from '../escapeHTML.js';

export const Agent = agent => {
  const { fullName, company, phoneNumber } = agent;

  return `
    <section class="agent list-item">
      <h3 class="agent__name list-item__heading">${escape(fullName)}</h3>
      <p class="agent__company list-item__content">${escape(company)}</p>
      <p class="agent__phone list-item__content">${escape(phoneNumber)}</p>
    </section>
  `;
};