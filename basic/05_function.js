// function 함수

// 1. 함수선언, 호출

// function name(params) {

// }

function sayHello() {
  console.log('안녕하세요~~~')
}

// const sayHello = function () {
//   console.log('안녕하세요~~~')
// }

sayHello()

// 2. 매개변수 parameter
function printMessage(message) {
  console.log(message)
}

printMessage('하하하')

// 3. 기본 파라미터

function showInfo(title, name = '스티브잡스') {
  console.log(`${title} by ${name}`)
}

showInfo('게르니카', '피카소')
showInfo('풍경')

// 4. rest 파라미터 / spread 연산자
function printAll(...items) {
  for (let i = 0; i < items.length; i++) {
    console.log(items[i])
  }
}

printAll('봄', '여름', '가을', '겨울', '안영', '커피', '바람')

// 5. scope
let movie = '하하하' // 전역변수 - global 변수

function printMovie() {
  let myMovie = '생활의 발견' // 지역변수 - local 변수

  console.log(movie)
  console.log(myMovie)
}

printMovie()

console.log(movie)

// 6. return
function plus(a, b) {
  return a + b
}

const sum = plus(20, 30) // 50
console.log(sum)

// 7. 콜백함수
const printPicaso = function () {
  console.log('I am Picaso....')
}

function printJobs() {
  console.log('I am Jobs....')
}

const call = function (myName, printPicaso, printJobs) {
  if (myName == 'Picaso') {
    printPicaso()
  } else {
    printJobs()
  }
}

call('Jobs', printPicaso, printJobs)

// 8. 화살표 함수 - arrow function
// function add(a, b) {
//   return a + b
// }

// const add = function (a, b) {
//   return a + b
// }

const add = (a, b) => a + b

const total = add(10, 20)
console.log(total)
