window.addEventListener('scroll', function () {
  console.log(window.scrollY)
  const menu = document.querySelector('.inner')
  menu.classList.toggle('sticky', window.scrollY > 300)
})
