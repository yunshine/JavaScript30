// TODO: write your code here
const playerOne = document.querySelector("#player1-race .active");

playerOne.addEventListener("keyup", (event) => {
  if ("keyup" == 81) {
    playerOne.classList.remove("active");
  }
});
