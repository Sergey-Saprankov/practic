document.addEventListener("DOMContentLoaded", () => {
  const tabsParent = document.querySelector(".tabheader__items");

  const tabs = tabsParent.querySelectorAll(".tabheader__item");

  const tabContent = document.querySelectorAll(".tabcontent");

  const hideTabsContent = () => {
    tabContent.forEach((item) => {
      item.style.display = "none";
    });

    tabs.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });
  };

  const showTabsContent = (i = 0) => {
    tabs[i].classList.add("tabheader__item_active");
    tabContent[i].style.display = "block";
  };

  tabsParent.addEventListener("click", (evt) => {
    const target = evt.target;

    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabsContent();
          showTabsContent(i);
        }
      });
    }
  });

  hideTabsContent();
  showTabsContent();

  //Timer

  const deadline = "2022-08-15";

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

    return { total: t, days, hours, minutes, seconds };
  };

  const getZero = (num) => {
    return num >= 0 && num < 10 ? `0${num}` : num;
  };

  const setClock = (selector, endtime) => {
    const timer = document.querySelector(selector);
    const days = timer.querySelector("#days");
    const hours = timer.querySelector("#hours");
    const minutes = timer.querySelector("#minutes");
    const seconds = timer.querySelector("#seconds");

    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endtime);
      days.textContent = getZero(t.days);
      hours.textContent = getZero(t.hours);
      minutes.textContent = getZero(t.minutes);
      seconds.textContent = getZero(t.seconds);
      const timeInterval = setInterval(updateClock, 1000);
      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  };

  setClock(".timer", deadline);

  // Modal
  const modalOpen = document.querySelectorAll("[data-modal]");
  const closeModal = document.querySelector("[data-close]");
  const modal = document.querySelector(".modal");

  const openModalWindow = () => {
    modal.classList.toggle("show");
    modal.classList.toggle("hide");
    document.body.style.overflow = "hidden";
  };

  modalOpen.forEach((el) => {
    el.addEventListener("click", (e) => {
      openModalWindow();
    });
  });

  const closeModalWindow = () => {
    modal.classList.toggle("show");
    modal.classList.toggle("hide");
    document.body.style.overflow = "scroll";
  };

  closeModal.addEventListener("click", (e) => {
    closeModalWindow();
  });

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      closeModalWindow();
    }
  });

  // const modalTimerId = setTimeout(openModalWindow, 3000);

  function showModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight - 1
    ) {
      openModal();
      window.removeEventListener("scroll", showModalByScroll);
    }
  }
  window.addEventListener("scroll", showModalByScroll);

  //Class

  class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector) {
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.descr = descr;
        this.price = price;
        this.parent = document.querySelector(parentSelector);
        this.transfer = 27;
        this.changeToUAH(); 
    }

    changeToUAH() {
        this.price = this.price * this.transfer; 
    }

    render() {
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="menu__item">
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            </div>
        `;
        this.parent.append(element);
    }
}

new MenuCard(
    "img/tabs/vegy.jpg",
    "vegy",
    'Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    9,
    ".menu .container"
).render();

new MenuCard(
    "img/tabs/post.jpg",
    "post",
    'Меню "Постное"',
    'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    14,
    ".menu .container"
).render();

new MenuCard(
    "img/tabs/elite.jpg",
    "elite",
    'Меню “Премиум”',
    'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    21,
    ".menu .container"
).render();



});







