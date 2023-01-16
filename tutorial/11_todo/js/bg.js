const bg = document.querySelector('.bg')
const num = Math.floor(Math.random() * 3) + 1

bg.style.backgroundImage = `url('./images/${num}.jpg')`
