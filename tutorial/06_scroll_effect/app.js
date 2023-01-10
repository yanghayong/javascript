const bg = document.querySelector('.bg')
const title = document.querySelector('.title')

window.addEventListener('scroll', function () {
  const value = window.scrollY

  if (value == 0) {
    title.classList.remove('active')
  } else {
    title.classList.add('active')
  }

  bg.style.clipPath = `circle(${value}px at 50% 50%)`
})
