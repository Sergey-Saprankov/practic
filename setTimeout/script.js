const container = document.querySelector('.container');

container.addEventListener('click', (evt) => {
  setTimeout(() => {
    container.classList.add('flex');
  }, 2000)

  clearInterval(userMessahe);
})

const messsage = () => {
  alert('HI');
}

const userMessahe =  setTimeout(messsage, 2000);