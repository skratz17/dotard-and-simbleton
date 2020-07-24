const container = document.querySelector('.container');

/**
 * Render a list of data objects to domNode using renderer to convert objects to HTML.
 * @param {HTMLElement} domNode The DOM node to render the list to
 * @param {Array} collection The array of elements to render as list elements
 * @param {function} renderer The function to convert each element in the collection to HTML
 * @param {String} listHeading The heading of this list
 */
export const renderListToDom = (domNode, collection, renderer, listHeading) => {
  const listHTML = collection.map(renderer).join('');

  domNode.innerHTML = `
    <h2 class="list__heading">${listHeading}</h2>
    ${listHTML}
  `;
};

/**
 * Given a class name, either find and return the first DOM node that matches the class, or create a new DOM node with the given class name.
 * @param {String} className The class name to either find a DOM node matching or create a new DOM node containing.
 */
export const getOrCreateListArticleNode = className => {
  let domNode = document.querySelector(`.${className}`);
  if(!domNode) {
    domNode = createListArticleNode(className);
    container.appendChild(domNode);
  }

  return domNode;
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