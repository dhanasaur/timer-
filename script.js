let timer;
let countdownElement = document.getElementById('countdown');
let alarmSound = document.getElementById('alarmSound');
function startTimer() {
  let min = parseInt(document.getElementById('minutes').value);
  if (isNaN(min) || min < 0) min = 0;
  let sec = parseInt(document.getElementById('seconds').value);
  if (isNaN(sec) || sec < 0 || sec > 59) sec = 0;
  let totalSeconds = min * 60 + sec;
  if (totalSeconds <= 0) {
    alert("Please enter a valid time.");
    return;
  }
  clearInterval(timer);
  updateDisplay(totalSeconds);
  timer = setInterval(() => {
    totalSeconds--;
    updateDisplay(totalSeconds);
    if (totalSeconds === 0) {
      clearInterval(timer);
      alarmSound.play();
      alert("Time's up!");
      
    }
  }, 1000);
}
function updateDisplay(seconds) {
  let mins = Math.floor(seconds / 60);
  let secs = seconds % 60;
  countdownElement.textContent = 
    `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}
