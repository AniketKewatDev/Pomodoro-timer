let timer = document.getElementById("timer");
let startBtn = document.getElementById("start");
let resetBtn = document.getElementById("reset");
let pauseBtn = document.getElementById("puase");

let alarm = new Audio("alarm.mp3");

function playAudio () {
  alarm.play();
}

let timeLeft = 1500;
let stopInterval;

function updateTimer() {
  stopInterval = setInterval(() => {
    let minute = Math.floor(timeLeft / 60);
    let seconds = Math.floor(timeLeft % 60);
    minute = minute.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, "0");
    timer.innerText = `${minute}:${seconds}`;
    timeLeft--;

    if (minute === "00" && seconds === "00") {
      startBtn.disabled = false;
      playAudio ();
      clearInterval(stopInterval);
      timeLeft = 1500;
    }
  }, 1000);
}

function reset() {
  clearInterval(stopInterval);
  timeLeft = 1500;
  let minute = Math.floor(timeLeft / 60);
  let seconds = Math.floor(timeLeft % 60);
  minute = minute.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");
  timer.innerText = `${minute}:${seconds}`;
  pauseBtn.innerText = "Pause";
}
function pause() {
  if (pauseBtn.innerText === "Pause" && timeLeft !== 1500) {
    clearInterval(stopInterval);
    pauseBtn.innerText = "Resume";
  } else if (timeLeft === 1500 && pauseBtn.innerText === "Pause") {
    pauseBtn.innerText = "Pause";
  } else {
    pauseBtn.innerText = "Pause";
    updateTimer();
  }
}

startBtn.addEventListener("click", () => {
  startBtn.disabled = true;
  updateTimer();
});
resetBtn.addEventListener("click", () => {
  startBtn.disabled = false;
  reset();
});
pauseBtn.addEventListener("click", () => {
  pause();
});
