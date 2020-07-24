const domNode = document.querySelector('.container');
const eventHub = document.querySelector('.container');

export const SearchBar = (className = '', placeholder = '') => {
  const searchBarHTML = `<input type="text" class="search ${className}" placeholder="${placeholder}"></input>`;

  domNode.innerHTML = searchBarHTML + domNode.innerHTML;
};

eventHub.addEventListener('keypress', event => {
  // if ENTER (charcode: 13) was pressed on the search input element
  if(event.target.classList.contains('search') && event.charCode === 13) {
    const searchedEvent = new CustomEvent('searched', {
      detail: {
        searchTerm: event.target.value
      }
    });

    eventHub.dispatchEvent(searchedEvent);
  }
});