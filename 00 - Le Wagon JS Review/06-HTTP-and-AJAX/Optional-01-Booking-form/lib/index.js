// TODO: write your code here!
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const counter = Number.parseInt(document.querySelector("#counter").innerText);

plus.addEventListener("click", (event) => {
  console.log("plus has been clicked");
  console.log(counter);
});
