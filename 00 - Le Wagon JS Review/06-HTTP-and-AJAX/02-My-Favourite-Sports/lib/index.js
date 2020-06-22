// TODO: write your code here!
const clickable = document.querySelectorAll(".clickable");

clickable.forEach((element) => {
  element.addEventListener("click", (event) => {
    element.classList.toggle("active");
  });
});