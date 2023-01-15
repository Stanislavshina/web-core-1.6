const readMoreBtn = document.querySelectorAll('.button__read-more')

readMoreBtn.forEach((btn) =>
  btn.addEventListener('click', (e) => {
    e.currentTarget.previousElementSibling.classList.toggle('show')
    btn.classList.toggle('button__read-more--active')
  })
)
