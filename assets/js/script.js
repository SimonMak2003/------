const modalOpen = document.querySelector('.map__btn');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close')

modalOpen.addEventListener('click', () => {
    modal.classList.add('active');
})

modalClose.addEventListener('click', () => {
    modal.classList.remove('active')
})
