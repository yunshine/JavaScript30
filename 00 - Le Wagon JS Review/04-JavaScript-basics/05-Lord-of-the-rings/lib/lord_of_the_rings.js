const isGood = (soldierType) => {
  // TODO: return `true` if the soldierType is Good.
  // Hint: Hobbits, Elves, Dwarves and Eagles are Good
  if (soldierType == "Hobbits" || soldierType == "Elves" || soldierType == "Dwarves" || soldierType == "Eagles") {
    return true;
  } else {
    return false;
  }
};


const buildSoldierObject = (battlefield) => {
  // TODO: Given a battlefield (String), return an object of forces.
  const keyValueArray = [];
  const soldierObject = {};
  const firstSplit = battlefield.split(',');  //=> [ 'Elves:3', 'Orcs:2' ]
  firstSplit.forEach((keyValueString) => {
    keyValueArray.push(keyValueString.split(':'));  //=> [ [ 'Elves', '3' ], [ 'Orcs', '2' ] ] in keyValueArray
  });
    keyValueArray.forEach((singleArray) => {
      soldierObject[singleArray[0]] = parseInt(singleArray[1]);
    });
    return soldierObject;
};


const whoWinsTheWar = (battlefield) => {
  // TODO: Based on the battlefield's description (it's a String), return "Good", "Evil" or "Tie".
  const keysValuesArray = Object.entries(buildSoldierObject(battlefield));
  return keysValuesArray;
  // Object.entries()
};


const battlefield = "Elves:3,Hobbits:7,Orcs:2";
// whoWinsTheWar(battlefield);  //=> { "Elves" => 3, "Hobbits" => 7, Orcs" => 2 }
console.log(whoWinsTheWar(battlefield));  //=> { "Elves" => 3, "Hobbits" => 7, Orcs" => 2 }

module.exports = { whoWinsTheWar, buildSoldierObject, isGood }; // Do not remove this line
