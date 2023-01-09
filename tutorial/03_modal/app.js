const btn = document.querySelector(".btn")
const dimm = document.querySelector(".dimm")
const modal = document.querySelector(".modal")
const close = document.querySelector(".close")

console.log(btn, dimm, modal, close)

btn.addEventListener("click", function () {
  dimm.classList.add("open")
  modal.classList.add("open")
})
