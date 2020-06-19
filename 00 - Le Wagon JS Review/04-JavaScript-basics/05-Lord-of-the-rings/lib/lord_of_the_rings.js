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
};

const whoWinsTheWar = (battlefield) => {
  // TODO: Based on the battlefield's description (it's a String), return "Good", "Evil" or "Tie".
};

console.log(isGood("Orcs"));

module.exports = { whoWinsTheWar, buildSoldierObject, isGood }; // Do not remove this line
