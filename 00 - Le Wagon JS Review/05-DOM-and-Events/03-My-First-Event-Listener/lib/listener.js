// TODO: React to a click on the button!
const button = document.querySelector("#clickme");
const audio = new Audio('sound.mp3');
button.addEventListener("click", (event) => {
  button.classList.add(".disabled");
  button.innerText = "Bingo!"
  audio.play();
});
