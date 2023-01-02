// variable 변수
// var, let, const
// scope -> 블럭기반 {...}

// 1. var
// 읽기,쓰기 가능하다
// 블럭을 무시한다

{
  var user = "john"
  user = "Alice"
  console.log(user)
}

console.log(user)

// 2. let
// 읽기와 쓰기가 가능하다.

{
  let title = "html"
  console.log(title)

  title = "css"
  console.log(title)
}

// console.log(title)

// 3. const
// 상수 - 읽기만 가능. 변하지 않는다

{
  const subject = "야인시대"
  console.log(subject)
  //   subject = "베트맨"
}

// 4. 변수의 데이터 타입
// 원시데이터(primitive)
// number, String, Boolean, null, undefined
// Object : 싱글데이터를 묶어놓은 데이터

// const myClass = {
//     subject: "html"
//     date: "2023-01-15"
// }

// function
// const hahaha = function () {
//   // 할일을 적어준다
//   console.log("hahaha")
// }

// number
const num = 100
const width = 10.5
console.log(`값은 ${num}이고, 타입은 ${typeof num}입니다.`)

const firstName = "john"
const lastName = "snow"

// console.log(firstName+``+lastName) 옛방식
// console.log(`${firstName} ${lastName}`) es6방식
