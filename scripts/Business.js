import escape from './escapeHTML.js';

export const Business = business => {
  const { companyName, addressFullStreet, addressCity, addressStateCode, addressZipCode } = business;

  return `
    <section class="business">
      <h2 class="business__name">${escape(companyName)}</h2>
      <p class="business__street">${escape(addressFullStreet)}</p>
      <p class="business__location">${escape(addressCity)}, ${escape(addressStateCode)} ${escape(addressZipCode)}</p>
    </section>
  `;
};