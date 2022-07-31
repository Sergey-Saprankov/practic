const container = document.querySelector('.container');

const btn = document.querySelector('.btn');

const scroll = container.scrollHeight;

btn.addEventListener('click', (e) => {
  // container.style.height = scroll + 'px';
  console.log(container.scrollTop);
})


console.log(container.getBoundingClientRect().top);

console.log(getComputedStyle(container).height);