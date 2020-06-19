const listItem = (content) => {
  // TODO: return the proper <li> HTML tag with its content (as a string)
  // => '<li class="list-group-item">milk</li>'
  return `<li class="list-group-item">${content}</li>`;
};

const unorderedList = (items) => {
  // const listItems = []
  // TODO: return the proper <ul> markup (as a string)
  let listItems = items.map((item) => {
    // listItems.push(`<li class="list-group-item">${item}</li>`);
    return `<li class="list-group-item">${item}</li>`;
  });
  return `<ul class="list-group">${listItems.join('')}</ul>`;
};

console.log(unorderedList(['milk', 'butter', 'bread']));

module.exports = { listItem, unorderedList }; // Do not remove.
