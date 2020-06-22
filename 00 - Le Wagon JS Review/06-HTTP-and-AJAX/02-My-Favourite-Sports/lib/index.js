// TODO: write your code here!
const buttons = document.querySelectorAll(".clickable");

// buttons.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     button.classList.toggle("active");
//   });
// });


const displayClicked = (event) => {
  event.currentTarget.classList.toggle("active");
};

const buttonToClick = (button) => {
  button.addEventListener("click", displayClicked);
};

buttons.forEach(buttonToClick);
