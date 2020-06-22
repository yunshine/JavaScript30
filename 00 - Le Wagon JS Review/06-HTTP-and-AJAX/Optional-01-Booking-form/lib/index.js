// TODO: write your code here!
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const counter = document.querySelector("#counter");
const submit = document.querySelector("#submit");
const cents = document.querySelector("#price-input");

let counterTotal = 1;
let priceTotal = 150;

plus.addEventListener("click", (event) => {
  console.log("plus has been clicked");
  counterTotal = counterTotal +1;
  priceTotal = priceTotal +150;
  counter.innerText = counterTotal.toString();
  submit.value = `Pay ${priceTotal}€`;    
  cents.value = `${priceTotal * 100}`;
  minus.classList.remove("disabled");
  console.log(counterTotal);
});

minus.addEventListener("click", (event) => {
  console.log("minus has been clicked");
    if (counterTotal <= 1) {
      event.preventDefault();  
      minus.classList.add("disabled");
    } else{
        minus.classList.remove("disabled");
        counterTotal = counterTotal -1;
        counter.innerText = counterTotal.toString();
        priceTotal = priceTotal -150;
        counter.innerText = counterTotal.toString();
        submit.value = `Pay ${priceTotal}€`;
        cents.value = `${priceTotal * 100}`;
        console.log(counterTotal);
    }
});