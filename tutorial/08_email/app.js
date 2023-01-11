window.onload = function () {
  document
    .getElementById('contact-form')
    .addEventListener('submit', function (event) {
      event.preventDefault()
      // generate a five digit number for the contact_number variable
      this.contact_number.value = (Math.random() * 100000) | 0
      // these IDs from the previous steps
      emailjs.sendForm('service_ibur23b', 'template_cpzziah', this).then(
        function () {
          console.log('SUCCESS!')
        },
        function (error) {
          console.log('FAILED...', error)
        }
      )
    })
}
