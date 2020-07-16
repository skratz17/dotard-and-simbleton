import escape from '../escapeHTML.js';

export const Business = business => {
  const { companyName, addressFullStreet, addressCity, addressStateCode, addressZipCode } = business;

  return `
    <section class="business list-item">
      <h3 class="business__name list-item__heading">${escape(companyName)}</h3>
      <p class="business__street list-item__content">${escape(addressFullStreet)}</p>
      <p class="business__location list-item__content">${escape(addressCity)}, ${escape(addressStateCode)} ${escape(addressZipCode)}</p>
    </section>
  `;
};