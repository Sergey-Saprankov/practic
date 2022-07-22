'use strict';

const modalWindow = document.querySelector('.modal-window');

const overlay = document.querySelector('.overlay');

const buttonClose = document.querySelector('.close-modal-window');

const showModalWindow = Array.from(document.querySelectorAll('.show-modal-window'));


showModalWindow.map(el => el.addEventListener('click', function() {
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
}))


buttonClose.addEventListener('click', function() {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
})