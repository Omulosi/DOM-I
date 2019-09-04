
// Global variables
let time = 0; // millisec
let MAX = 10; // millisec
let maxMilliSec = 1000; // millisec
let STEP = 10; // millisec
let sec = 0;
let timerID;

let strTime, msH, msT, msO, secT, secO;

let updateTime = (time, type) =>  {
  if (type == 'milli') {
    strTime = `${time}`.length < 3? `0${time}`: `${time}`;
    [msH, msT, _] = strTime.split('');
    msHundreds.textContent = msH;
    msTens.textContent = msT;
  }

  if (type == 'sec') {
    strTime = `${time}`.length < 2?`0${time}`: `${time}`;
    [secT, secO] = strTime.split('');
    secondOnes.textContent = secO;
    secondTens.textContent = secT;
  }

}
  
function timer() {
  let secondTens = document.querySelector('#secondTens');
  let secondOnes = document.querySelector('#secondOnes');
  let msHundreds = document.querySelector('#msHundreds');
  let msTens = document.querySelector('#msTens');

  time = time + STEP;

  if (time >= 1000) {
    sec  = sec + 1;
    if (sec >= MAX) {
      clearInterval(timerID);
      [...document.querySelectorAll('.digits')].forEach(elem => elem.classList.add('redDigit'));
    }
    time = 0;
    updateTime(sec, 'sec');
  }

  if (time < 1000) {
    updateTime(time, 'milli');
  } 

}

// start button
let startBtn = document.createElement('button');
startBtn.textContent = 'Start';
startBtn.classList.add('btn');

let resetBtn = document.createElement('button');
resetBtn.textContent = 'Reset';
resetBtn.classList.add('btn');

let controls = document.querySelector('.controls');
controls.appendChild(startBtn);
controls.appendChild(resetBtn);


startBtn.addEventListener('click', (e) => {
  timerID = setInterval(timer, STEP);
  e.target.disabled = 'true';
});

resetBtn.addEventListener('click', (e) => {
  let secondTens = document.querySelector('#secondTens');
  let secondOnes = document.querySelector('#secondOnes');
  let msHundreds = document.querySelector('#msHundreds');
  let msTens = document.querySelector('#msTens');
  let start = document.querySelector('.controls > button:nth-child(1)');
  start.disabled = false;

  sec = time = 0;

  updateTime(0, 'sec');
  updateTime(0, 'milli');

  [...document.querySelectorAll('.digits')].forEach(elem => elem.classList.remove('redDigit'));
})
