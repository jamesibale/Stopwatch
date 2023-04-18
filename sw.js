//Global variables

const time_el = document.querySelector(".watch .time"); //getting watch and time element in div css and storing inside a variable
const startBtn = document.getElementById("start"); // access and manipulate an HTML element on a webpage using its unique ID.
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let seconds = 0;
let interval = null;

//event listeners
startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

//update the timer
function timer() {
  seconds++;

  //format our time
  let hrs = Math.floor(seconds / 3600); //math.floor - round down a number (whole number)
  let mins = Math.floor((seconds - hrs * 3600) / 60);
  let secs = seconds % 60; //remainder (if seconds = 61 then seconds is 1 after module operator)

  if (secs < 10) secs = "0" + secs;
  if (mins < 10) mins = "0" + mins;
  if (hrs < 10) hrs = "0" + hrs;

  time_el.innerHTML = `${hrs}:${mins}:${secs}`;
}

function start() {
  if (interval) {
    return;
  }

  interval = setInterval(timer, 1000);
}

function stop() {
  clearInterval(interval);
  interval = null;
}

function reset() {
  stop();
  seconds = 0;
  time_el.innerHTML = "00:00:00";
}
