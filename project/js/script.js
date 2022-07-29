/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';
// document.addEventListener('DOMContentLoaded', () => {
//     const main = document.querySelector('.promo');
//     const banner = main.querySelectorAll('.promo__adv img');
    
//     const genre = document.querySelector('.promo__genre');
//     const bg = document.querySelector('.promo__bg');
    
//     const list = document.querySelector('.promo__interactive-list');
//     const item = list.querySelectorAll('.promo__interactive-item');

//     const form = document.querySelector('.add');
//     const input = form.querySelector('.adding__input');
//     const button = form.querySelector('button');

//     const movieDB = {
//         movies: [
//             "Логан",
//             "Лига справедливости",
//             "Ла-ла лэнд",
//             "Одержимость",
//             "Скотт Пилигрим против..."
//         ]
//     };
    

//     form.addEventListener('submit', (e) => {
//         e.preventDefault();
//         const text = input.value;
        
//         if (text) { 
//             movieDB['movies'].push(text);
//             addFilm(movieDB.movies, list);
//         }
        
        
        
//         input.value = '';
//     })

//     const deleteAdv = (arr) => {
//         arr.forEach(item => item.remove())
//     }
    
//     const makeChanges = () => {
//         genre.textContent = 'драма';
//         bg.style.background = 'url(img/bg.jpg)';
//     }

//     const sortArray = (arr) => {
//         arr.sort();
//     }
    
//     function addFilm (film, parent) {
//         parent.innerHTML = "";
//         sortArray(film);

//         film.forEach((film, i) => {
//             parent.innerHTML += `
//                 <li class = 'promo__interactive-item'>${i + 1} ${film}
//                     <div class="delete"></div>
//                 </li>
//             `;
//         })
//     }

//     makeChanges();
//     deleteAdv(banner);
//     deleteAdv(item);  
//     addFilm(movieDB.movies, list);
    
    
// })

document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('.promo');
     const banner = main.querySelectorAll('.promo__adv img');
    
     const genre = document.querySelector('.promo__genre');
     const bg = document.querySelector('.promo__bg');
    
     const list = document.querySelector('.promo__interactive-list');
     const item = list.querySelectorAll('.promo__interactive-item');

     const form = document.querySelector('.add');
     const input = form.querySelector('.adding__input');
     const checkbox = form.querySelector('[type="checkbox"]');


     const movieDB = {
         movies: [
             "Логан",
             "Лига справедливости",
             "Ла-ла лэнд",
             "Одержимость",
             "Скотт Пилигрим против..."
         ]
     };

     const sortArray = (arr) => {
        arr.sort();
     }

     const deleteAdv = (arr) => {
            arr.forEach(item => item.remove())
             }

     const about = () => {
        genre.textContent = 'драма';
        bg.style.background = 'url(img/bg.jpg)';
     }


     const deleteFilm = () => {
        document.querySelectorAll('.delete').forEach((el, i) => {
            el.addEventListener('click', (e) => {
                el.parentElement.remove();
                movieDB.movies.splice(i, 1);

                addMovies(dataFilm, parent, tag, className);
            })
         })
     }


     const addMovies = (dataFilm, parent, tag, className) => {
        parent.innerHTML = '';
        sortArray(dataFilm);
        dataFilm.forEach((element, i) => {
            const item = document.createElement(tag);
            item.textContent = `${i + 1} ${element}`;
            item.classList.add(className);
            const div = document.createElement('div');
            div.classList.add('delete');
            item.appendChild(div);
            parent.appendChild(item);
        });

        deleteFilm();
     }


     

     form.addEventListener('submit', (e) => {
        e.preventDefault();
        let newFilm = input.value;
        const favorite = checkbox.checked;

        if (newFilm.length > 21) {
            newFilm = `${newFilm.slice(0, 21)}...`;
        }

        if (favorite) {
            console.log('Добавляем любимый фильм');

        }

        if (newFilm) {
            movieDB.movies.push(newFilm);
            addMovies(movieDB.movies, list, 'li', 'promo__interactive-item');
        }

        e.target.reset();
     })


  















     deleteAdv(item);
     deleteAdv(banner);
     about();
     addMovies(movieDB.movies, list, 'li', 'promo__interactive-item');

})


// Возьмите свой код из предыдущей практики

