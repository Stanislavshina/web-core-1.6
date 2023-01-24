const btnAsideClose = document.querySelector('.button__aside-close'),
  btnMenu = document.querySelector('.button__menu'),
  btnModal1 = document.querySelector('.repair-info__application'),
  btnModal2 = document.querySelector('.repair-info__status'),
  btnModalClose = document.querySelectorAll('.button__modal-close'),
  modalBlock = document.querySelectorAll('.repair-info'),
  modal1 = document.querySelector('.modal-1'),
  modal2 = document.querySelector('.modal-2'),
  asideMenu = document.querySelector('.aside-menu'),
  blur = document.querySelector('.blur'),
  asideFeedbackBtn = document.querySelector('.aside__button-feedback'),
  asideCallbackBtn = document.querySelector('.aside__button-callback')

const toggleAsideMenu = () => {
  asideMenu.classList.toggle('aside--active')
  document.body.classList.toggle('lock')
  blur.classList.toggle('blur--active')
}

const openModal = (e) => {
  if (
    e.target.classList.contains('repair-application') ||
    e.target.classList.contains('aside__button-feedback')
  ) {
    modal1.classList.add('modal--active')
    console.log(e.target)
  }
  if (
    e.target.classList.contains('repair-status') ||
    e.target.classList.contains('aside__button-callback')
  ) {
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

asideCallbackBtn.addEventListener('click', (e) => openModal(e))
asideFeedbackBtn.addEventListener('click', (e) => openModal(e))

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
