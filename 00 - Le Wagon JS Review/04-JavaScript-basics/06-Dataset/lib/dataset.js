const dataset = (element) => {
  // TODO: return the element's data attributes in an object
  if (element == "") {
    return {};
  }
  const arrayOfStrings = [];
  const arraysofKeysAndValues = [];
  const keyStrings = [];
  const valueStrings = [];
  const objectOfData = {};
  let arrayOfData = element.match(/data-\w+="\w+"/g);  // => [ 'data-id="42"', 'data-price="15"', 'data-category="popular"' ]
  arrayOfData.forEach((stringOfData) => {
    arrayOfStrings.push(stringOfData.substring(5));
  });
  arrayOfStrings.forEach((keyValuePair) => {      // =>[ 'id="42"', 'price="15"', 'category="popular"' ]
    arraysofKeysAndValues.push(keyValuePair.split('='));
  });
  arraysofKeysAndValues.forEach((keyValuePairArray) => {     // => [ [ 'id', '"42"' ], [ 'price', '"15"' ], [ 'category', '"popular"' ] ]
    if (keyValuePairArray[0] == "id" || keyValuePairArray[0] == "price") {
      objectOfData[keyValuePairArray[0]] = parseInt(keyValuePairArray[1].slice(1,-1));
    } else if (keyValuePairArray[0] == "category") {
        objectOfData[keyValuePairArray[0]] = keyValuePairArray[1].slice(1,-1);
    } else if (keyValuePairArray[1] == "true" || keyValuePairArray[1] == "false") {
        objectOfData[keyValuePairArray[0]] = keyValuePairArray[1].slice(2,-2);
    } 
  });
  return objectOfData;
};


const burger = `<div class="card" data-id="42" data-price="15" data-category="popular">
  <div class="card-category">Popular</div>
  <div class="card-description">
    <h2>The best burger in town (15€)</h2>
  </div>
</div>`;

console.log(dataset(burger));  // => { id: 42, price: 15, category: 'popular' }

module.exports = dataset; // Do not remove.
