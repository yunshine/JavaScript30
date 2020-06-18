const sumOfNegative = (numbers) => {
  // TODO: You are getting a `numbers` array. Return the sum of **negative** numbers only.
  // console.log("testing");
  let sumArray = [];
  let sumTotal = 0;
  numbers.forEach((number) => {
    if (number < 0) {
      sumArray.push(number);;
    }
  })
  sumArray.forEach ((number) => {
    sumTotal = sumTotal + number;
  })
  return sumTotal;
};

console.log(sumOfNegative([-4, 5, -2, 9]));


// sumOfNegative(1);

module.exports = sumOfNegative; // Do not remove.
