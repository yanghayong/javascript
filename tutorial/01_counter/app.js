const price = document.querySelector(".price")
const count = document.querySelector(".count")
const sum = document.querySelector(".sum")
const minus = document.querySelector(".minus")
const reset = document.querySelector(".reset")
const plus = document.querySelector(".plus")

const btns = document.querySelectorAll("button")

let num = 1
const unit_price = 12000

price.textContent = unit_price
count.textContent = num
sum.textContent = unit_price * num

function paintTotalPrice() {
  count.textContent = num
  sum.textContent = unit_price * num
}

btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    // console.log(e.target.className)

    if (e.target.className == "plus") {
      num++
      paintTotalPrice()
    } else if (e.target.className == "minus") {
      num--
      if (num <= 1) num = 1
      paintTotalPrice()
    } else {
      num = 1
      paintTotalPrice()
    }
  })
})

// plus.addEventListener('click', function () {
//   num++
//   paintTotalPrice()
// })

// minus.addEventListener('click', function () {
//   num--
//   if (num <= 1) num = 1
//   paintTotalPrice()
// })

// reset.addEventListener('click', function () {
//   num = 1
//   paintTotalPrice()
// })
