// document.addEventListener('DOMContentLoaded', (evt) => {
//   const parent = document.querySelector('.tabheader__items');

//   const tabs = document.querySelectorAll('.tabheader__item');

//   const tabsContent = document.querySelectorAll('.tabcontent');

//   const hideTabsContent = () => {
//     tabsContent.forEach(item => {
//       item.style.display = 'none';
//     });

//     tabs.forEach(item => {
//       item.classList.remove('tabheader__item_active');
//     });
//   };

//   const showTabsContent = (i = 0) => {
//     tabs[i].classList.add('tabheader__item_active');
//     tabsContent[i].style.display = 'block';
//   }

//   parent.addEventListener('click', (evt) => {
//     if (evt.target && evt.target.classList.contains('tabheader__item')) {
//       tabs.forEach((item, i) => {
//         if (evt.target == item) {
//           hideTabsContent();
//           showTabsContent(i);
//         }
//       })
//     }
//   })



//   hideTabsContent();
//   showTabsContent();


// })


document.addEventListener('DOMContentLoaded', () => {

const tabsParent = document.querySelector('.tabheader__items');

const tabs = tabsParent.querySelectorAll('.tabheader__item');

const tabContent =  document.querySelectorAll('.tabcontent');


const hideTabsContent = () => {
  tabContent.forEach(item => {
    item.style.display = 'none';
  });

  tabs.forEach(item => {
    item.classList.remove('tabheader__item_active');
  }); 
}

const showTabsContent = (i = 0) => {
  tabs[i].classList.add('tabheader__item_active');
  tabContent[i].style.display = 'block';
}

tabsParent.addEventListener('click', (evt) => {
  const target = evt.target;

  if (target && target.classList.contains('tabheader__item')) {
    tabs.forEach( (item, i) => {
      if (target == item) {
        hideTabsContent();
        showTabsContent(i);
      }
    })
  }
})

hideTabsContent();
showTabsContent();







//Timer

  const deadline = '2022-08-1';

  const getTimeRemaining = (endtime) => {
    let days, hours, minutes, seconds;
    const t = Date.parse(endtime) - Date.parse(new Date());

    if (t < 0) {
      [days, hours, minutes, seconds] = [0, 0, 0, 0];
    } else {
      days = Math.floor(t / (1000 * 60 * 60 * 24));

     hours = Math.floor((t / (1000 * 60 * 60)) % 24);

     minutes = Math.floor((t / (1000 * 60)) % 60);

     seconds = Math.floor((t / 1000) % 60);
    }
     
    return {total: t, days, hours, minutes, seconds};
  }

  const getZero = (num) => {
    return num >= 0 && num < 10 ? `0${num}` : num;
  }

  const setClock = (selector, endtime) => {
    const timer = document.querySelector(selector);
    const days = timer.querySelector('#days');
    const hours = timer.querySelector('#hours');
    const minutes = timer.querySelector('#minutes');
    const seconds = timer.querySelector('#seconds');

    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endtime);
      days.textContent = getZero(t.days);
      hours.textContent = getZero(t.hours);
      minutes.textContent = getZero(t.minutes);
      seconds.textContent = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }

    const timeInterval = setInterval(updateClock, 1000);
  }


  setClock('.timer', deadline);


})