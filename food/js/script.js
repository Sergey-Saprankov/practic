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


})