/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const main = document.querySelector('.promo');
const banner = main.querySelector('.promo__adv');

const genre = document.querySelector('.promo__genre');
const bg = document.querySelector('.promo__bg');

const list = document.querySelector('.promo__interactive-list');
const item = list.querySelectorAll('.promo__interactive-item');

item.forEach(element => {
    element.remove();
});

movieDB.movies.sort();

movieDB.movies.forEach((el, i) => {
    const item = document.createElement('li');
    item.classList.add('promo__interactive-item');
    item.textContent = `${i + 1}.  ${el}`;
    list.appendChild(item);
})

main.removeChild(banner);
genre.textContent = 'драма';
bg.style.background = 'url(img/bg.jpg)';
