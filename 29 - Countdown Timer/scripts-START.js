const buttons = document.querySelectorAll('.timer__button');
const timeLeftDisplay = document.querySelector('.display__time-left');
const timeEndDisplay = document.querySelector('.display__end-time');

function startTimer() {
    const startTime = Date.now();
    const endTime = Date.now() + parseInt(this.dataset.time);

    timeLeftDisplay.innerText = this.dataset.time;
    let secondsRemaining = parseInt(this.dataset.time);
    const countdown = setInterval(function () {
        secondsRemaining -= 1;
        timeLeftDisplay.innerText = secondsRemaining;
        if (secondsRemaining === 0) {
            stopTimer();
        };
    }, 1000);

    // console.log(secondsRemaining);


    function stopTimer() {
        clearInterval(countdown);
    };

    timeEndDisplay.innerText = this.dataset.time;
    console.log(startTime, endTime);

}

buttons.forEach(button => button.addEventListener('click', startTimer));
