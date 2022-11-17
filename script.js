let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let count;

document.cronometro.start.onclick = () => start();
document.cronometro.pause.onclick = () => pause();
document.cronometro.reset.onclick = () => reset();

function start() {
  pause();
  count = setInterval(() => {
    timer();
  }, 10);
}

function pause() {
  clearInterval(count);
}

function reset() {
  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;
  document.getElementById("hour").innerText = "00";
  document.getElementById("minute").innerText = "00";
  document.getElementById("second").innerText = "00";
  document.getElementById("millisecond").innerText = "000";
}

function timer() {
  if ((millisecond += 10) == 1000) {
    millisecond = 0;
    second++;
  }
  if (second == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60) {
    minute = 0;
    hour++;
  }
  document.getElementById("hour").innerText = returnData(hour);
  document.getElementById("minute").innerText = returnData(minute);
  document.getElementById("second").innerText = returnData(second);
  document.getElementById("millisecond").innerText = returnData(millisecond);
}

function returnData(input) {
  return input > 9 ? input : `0${input}`;
}
