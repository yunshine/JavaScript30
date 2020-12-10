const buttons = document.querySelectorAll('.timer__button');
const timeLeftDisplay = document.querySelector('.display__time-left');
const timeEndDisplay = document.querySelector('.display__end-time');

function setTimerEndTime(seconds) {
    const newDate = new Date();
    const startHour = newDate.getHours();
    const startMinute = newDate.getMinutes();
    const startSecond = newDate.getSeconds();

    console.log("Seconds to Add: ", seconds);
    console.log("Hours NOW: ", newDate.getHours());
    console.log("Minutes NOW: ", newDate.getMinutes());
    console.log("Seconds NOW: ", newDate.getSeconds());

    const endSecondsToDisplay = (startSecond + seconds) % 60;
    console.log("Seconds to Show: ", endSecondsToDisplay);

    // console.log("Hours: ", newDate.getHours());
    // console.log("Minutes: ", minutesToShow);
    // console.log("Seconds: ", secondsToShow);

};

function startTimer() {
    let secondsRemaining = parseInt(this.dataset.time);
    setTimerEndTime(secondsRemaining);
    timeLeftDisplay.innerText = this.dataset.time;
    timeEndDisplay.innerText = Date.now() + parseInt(this.dataset.time);

    const countdown = setInterval(function () {
        secondsRemaining -= 1;
        timeLeftDisplay.innerText = secondsRemaining;
        if (secondsRemaining === 0) {
            clearInterval(countdown);
        };
    }, 1000);
};

buttons.forEach(button => button.addEventListener('click', startTimer));

// function stopTimer() {
//     clearInterval(countdown);
// };

// const startTime = Date.now();
// const endTime = Date.now() + parseInt(this.dataset.time);
// timeEndDisplay.innerText = this.dataset.time;

// const secondsToAdd = Math.ceil(seconds / 60);
// // const minutesToAdd = Math.ceil(seconds / 60);
// const secondsLeft = seconds % 60;


// const newDate = new Date();
// const secondsToShow = (newDate.getSeconds() + seconds) % 60;
// const minutesToAdd = newDate.getSeconds() + (seconds % 60);
// console.log("adding this many minutes: ", minutesToAdd);

// const minutesToShow = (newDate.getMinutes() + Math.ceil(seconds / 60) + minutesToAdd) % 60;

// const timeMinutes = newDate.getMinutes() + Math.ceil(seconds / 60) + (((seconds % 60) + newDate.getSeconds()) % 60);

// const timeHours = newDate.getHours() + Math.ceil(seconds / 3600);

// console.log("Hours NOW: ", newDate.getHours());
// console.log("Minutes NOW: ", newDate.getMinutes());
// console.log("Seconds NOW: ", newDate.getSeconds());

// console.log("Hours: ", newDate.getHours());
// console.log("Minutes: ", minutesToShow);
// console.log("Seconds: ", secondsToShow);
