// 1. 조건 연산자 - if, else if, else

const age = 30

if (age >= 20) {
  // 조건이 참일 때
  console.log("성인입니다.")
} else {
  // 조건이 거짓일 때
  console.log("청소년 입니다.")
}

const month = 10

if (month >= 3 && month <= 5) {
  console.log("spring")
} else if (month >= 6 && month <= 8) {
  console.log("summer")
} else if (month >= 9 && month <= 11) {
  console.log("fall")
} else {
  console.log("winter")
}

// 2. 삼항 연산자
// 조건 ? 값1 : 값2
const myAge = 12
console.log(myAge >= 20 ? "성인" : "청소년")

// 3. switch문

const color = "yellow"

switch (color) {
  case "red":
    console.log("I like red")
    break

  case "blue":
    console.log("I like blue")
    break

  case "yellow":
    console.log("I like yellow")
    break

  default:
    console.log("I dont know")
    break
}
