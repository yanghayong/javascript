const dimm = document.querySelector(".dimm")
const modal = document.querySelector(".modal")
const closeBtn = document.querySelector(".close")
const inputs = document.querySelectorAll("input")
console.log(inputs)

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault()
      dimm.classList.add("active")
      // generate a five digit number for the contact_number variable
      this.contact_number.value = (Math.random() * 100000) | 0
      // these IDs from the previous steps
      emailjs.sendForm("service_ibur23b", "template_cpzziah", this).then(
        function () {
          console.log("SUCCESS!")
          modal.classList.add("active")
        },
        function (error) {
          console.log("FAILED...", error)
        }
      )
    })

  closeBtn.addEventListener("click", function () {
    modal.classList.remove("active")
    dimm.classList.remove("active")

    inputs.forEach((item) => (item.value = ""))
  })
}
