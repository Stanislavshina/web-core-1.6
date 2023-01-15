const btnAsideClose = document.querySelector('.button__aside-close'),
  btnMenu = document.querySelector('.button__menu'),
  btnModal1 = document.querySelector('.repair-info__application'),
  btnModal2 = document.querySelector('.repair-info__status'),
  btnModalClose = document.querySelectorAll('.button__modal-close'),
  modalBlock = document.querySelectorAll('.repair-info'),
  modal1 = document.querySelector('.modal-1'),
  modal2 = document.querySelector('.modal-2'),
  asideMenu = document.querySelector('.aside-menu'),
  blur = document.querySelector('.blur')

const toggleAsideMenu = () => {
  asideMenu.classList.toggle('aside--active')
  document.body.classList.toggle('lock')
  blur.classList.toggle('blur--active')
}

const openModal = (e) => {
  if (e.target.classList.contains('repair-application')) {
    modal1.classList.add('modal--active')
  }
  if (e.target.classList.contains('repair-status')) {
    modal2.classList.add('modal--active')
  }
  document.body.classList.add('lock')
  blur.classList.add('blur--active')
}

const closeModal = () => {
  if (modal1.classList.contains('modal--active')) {
    modal1.classList.remove('modal--active')
  }
  if (modal2.classList.contains('modal--active')) {
    modal2.classList.remove('modal--active')
  }

  document.body.classList.remove('lock')
  blur.classList.remove('blur--active')
}

blur.addEventListener('click', () => {
  modal1.classList.remove('modal--active')
  modal2.classList.remove('modal--active')
  asideMenu.classList.remove('aside--active')
  document.body.classList.remove('lock')
  blur.classList.remove('blur--active')
})
modalBlock.forEach((el) => {
  el.addEventListener('click', (e) => {
    openModal(e)
  })
})

btnModalClose.forEach((el) => {
  el.addEventListener('click', closeModal)
})
btnMenu.addEventListener('click', toggleAsideMenu)
btnAsideClose.addEventListener('click', toggleAsideMenu)
