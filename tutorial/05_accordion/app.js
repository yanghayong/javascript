const contents = document.querySelectorAll('.content')

contents.forEach((item) => {
  item.addEventListener('click', function () {
    this.classList.toggle('active')
  })
})
