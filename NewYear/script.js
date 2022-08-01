document.addEventListener('DOMContentLoaded', () => {
const deadline = '2023-01-01';

function getZero(num) {
  return num >= 0 && num < 10 ? `0${num}` : num;
}

function timing(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const days = Math.floor((total / (1000 * 60 * 60 * 24)));
  const hours = Math.floor( (total / 1000 / 60 / 60 % 24)) - 3;
  console.log(hours);
  const minutes = Math.floor((total / (1000 * 60) % 60));
  const seconds = Math.floor((total / 1000) % 60);
 
  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}



function setTime(endtime) {
    const days = document.querySelector('.days');
    const hours = document.querySelector('.hours');
    const minutes = document.querySelector('.minutes');
    const seconds = document.querySelector('.seconds');
  
    updateClock();

    function updateClock() {
      const t = timing(endtime);
    
      days.textContent = getZero(t.days);
      hours.textContent = getZero(t.hours);
      minutes.textContent = getZero(t.minutes);
      seconds.textContent = getZero(t.seconds);
      
     
  }
  const timeInterval = setInterval(updateClock, 1000);
}


setTime(deadline);
// const setIntervalTimer = setInterval(setTime, 1000);















})