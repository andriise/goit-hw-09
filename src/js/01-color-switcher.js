const start = document.querySelector('button[data-start]');
const stop = document.querySelector('button[data-stop]');

start.addEventListener('click', onStartClick);
stop.addEventListener('click', onStopClick);
stop.disabled = true;
let timerId = null;

function onStartClick() {
  start.disabled = true;
  stop.disabled = false;

  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStopClick() {
  clearInterval(timerId);
  start.disabled = false;
  stop.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
