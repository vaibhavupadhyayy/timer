const display = document.querySelector(".display");
const startBtn = document.querySelector("#start-btn");
const pauseBtn = document.querySelector("#pause-btn");
const resetBtn = document.querySelector("#reset-btn");

let timerId;
let startTime;
let elapsedTime = 0;

function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerId = setInterval(updateTimer, 10);
}

function pauseTimer() {
  clearInterval(timerId);
  elapsedTime = Date.now() - startTime;
}

function resetTimer() {
  clearInterval(timerId);
  display.textContent = "00:00:00";
  elapsedTime = 0;
}

function updateTimer() {
  const elapsedTimeMillis = Date.now() - startTime;
  const hours = Math.floor(elapsedTimeMillis / 3600000);
  const minutes = Math.floor((elapsedTimeMillis % 3600000) / 60000);
  const seconds = Math.floor((elapsedTimeMillis % 60000) / 1000);
  const millis = elapsedTimeMillis % 1000;
  display.textContent = `${padZero(hours)}:${padZero(
    minutes
  )}:${padZero(seconds)}.${padZero(millis, 3)}`;
}

function padZero(num, width = 2) {
  return num.toString().padStart(width, "0");
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);
