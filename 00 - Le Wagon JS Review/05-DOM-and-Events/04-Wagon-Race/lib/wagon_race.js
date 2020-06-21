// TODO: write your code here

const wagonMove = (wagon) => {
  const whichWagon = document.querySelector(`#player${wagon}-race .active`);
  if (whichWagon.nextElementSibling) {
    whichWagon.nextElementSibling.classList.add("active");
    whichWagon.classList.remove("active");
  } else {
    alert(`Player ${whichWagon} wins! Play again?`);
    window.location.reload();
  }
};

const advance = (event) => {
  if (event.key === "q") {
    wagonMove(1);
  } else if (event.key === "p") {
    wagonMove(2);
  }
};

document.addEventListener("keyup", advance);