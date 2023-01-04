// 1. 함수선언, 호출

// function name(params) {

// }

function sayHello() {
  console.log("안녕하세요~~~")
}

// const sayHello = function () {
//   console.log('안녕하세요~~~')
// }

sayHello()

// 2. 매개변수 parameter
function printMessage(message) {
  console.log(message)
}

printMessage("하하하")

// 3. 기본 파라미터

function showInfo(title, name = "스티브잡스") {
  console.log(`${title} by ${name}`)
}

showInfo("게르니카", "피카소")
showInfo("풍경")
