
// Global variables
let time = 0; // millisec
let MAX = 10; // millisec
let maxMilliSec = 1000; // millisec
let STEP = 10; // millisec
let sec = 0;

let strTime, msH, msT, msO, secT, secO;

function timer() {
  let secondTens = document.querySelector('#secondTens');
  let secondOnes = document.querySelector('#secondOnes');
  let msHundreds = document.querySelector('#msHundreds');
  let msTens = document.querySelector('#msTens');

  let updateTime = (time, type) =>  {
    if (type == 'milli') {
      strTime = `${time}`.length < 3? `0${time}`: `${time}`;
      [msH, msT, _] = strTime.split('');
      msHundreds.textContent = msH;
      msTens.textContent = msT;
    }

    if (type == 'sec') {
      strTime = `${sec}`.length < 2?`0${sec}`: `${sec}`;
      [secT, secO] = strTime.split('');
      secondOnes.textContent = secO;
      secondTens.textContent = secT;
    }

  }
  
  time = time + STEP;

  if (time >= 1000) {
    sec  = sec + 1;
    if (sec >= MAX) {
      clearInterval(id);
      [...document.querySelectorAll('.digits')].forEach(elem => elem.classList.add('redDigit'));
    }
    time = 0;
    updateTime(sec, 'sec');
  }

  if (time < 1000) {
    updateTime(time, 'milli');
  } 

}

let id = setInterval(timer, STEP);
