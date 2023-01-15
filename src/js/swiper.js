import Swiper, { Pagination } from 'swiper'

const swiperWrapper = document.getElementsByClassName('swiper-wrapper'),
  priceList = document.querySelector('.price-list'),
  priceItem = document.querySelectorAll('.price__item')

if (window.innerWidth <= 565) {
  priceList.classList.add('swiper-wrapper')
  priceItem.forEach((item) => item.classList.add('swiper-slide'))
  const swiper = new Swiper('.swiper', {
    modules: [Pagination],
    width: 240,
    loop: true,
    pagination: {
      el: '.swiper-pag',
      bulletClass: 'swiper-pag__bullet',
      bulletActiveClass: 'swiper-pag__bullet--active'
    }
  })
  const arr = [...swiperWrapper].forEach(
    (el) => (el.style.overflow = 'visible')
  )
}
