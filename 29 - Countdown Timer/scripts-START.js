let countdown;

function displayTimeLeft(seconds) {
  console.log(seconds);
}

function timer(seconds) {
  displayTimeLeft(seconds);
  const now = Date.now();
  const then = now + (seconds * 1000);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - (Date.now())) / 1000);
    if(secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secondsLeft);
}, 1000);
}

