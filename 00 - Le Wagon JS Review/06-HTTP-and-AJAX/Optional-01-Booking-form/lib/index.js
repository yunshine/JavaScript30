// TODO: write your code here!
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const counter = document.querySelector("#counter");
let counterTotal = 1;

plus.addEventListener("click", (event) => {
  console.log("plus has been clicked");
  counterTotal = counterTotal +1;
  counter.innerText = counterTotal.toString();
  console.log(counterTotal);
});
