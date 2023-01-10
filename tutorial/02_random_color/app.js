const bg = ['orange', 'blue', 'red', 'yellow', 'green']
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']
const color = document.getElementById('color')
const bgBtn = document.getElementById('bgBtn')
const hexBtn = document.getElementById('hexBtn')

console.log(bg, hex, color, bgBtn, hexBtn)

function getBgNum() {
  return Math.floor(Math.random() * bg.length)
}

function getHexNum() {
  return Math.floor(Math.random() * hex.length)
}

function changeColor() {
  const randomBgNum = getBgNum()
  document.body.style.backgroundColor = bg[randomBgNum]
  color.textContent = bg[randomBgNum]
}

function changeHex() {
  let hexColor = '#'
  for (let i = 0; i < 6; i++) {
    const j = getHexNum()
    hexColor = hexColor + hex[getHexNum()]
  }

  document.body.style.backgroundColor = hexColor
  color.textContent = hexColor
}

bgBtn.addEventListener('click', changeColor)
hexBtn.addEventListener('click', changeHex)

// setInterval(changeHex, 50)
