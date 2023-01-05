// 오브젝트 object
// - 자바스크립트의 데이타
// - 상태와 행동을 가진다
// - phone의 상태(properties) -> color, size
// - phone의 행동(method) -> ring, take a picture, play music
// 형식 { 키 : 값}

// 1. object
const user = {
  name: "Picaso",
  age: 30,
  email: "picaso@gmail.com",
  works: [
    { id: 1, title: "게르니카", price: 25000, like: 400 },
    { id: 2, title: "아비뇽의 처녀들", price: 35000, like: 750 },
    { id: 3, title: "우는 여인", price: 80000, like: 1200 },
  ],
  login() {
    console.log("Picaso logged in!")
  },
  logout() {
    console.log("Picaso logged out!!!!!")
  },
  printWorks() {
    console.log("피카소의 대표작")
    console.log(this)
    this.works.forEach((work) => {
      console.log(
        `${work.id}. ${work.title}, ${work.price}원, 좋아요(${work.like})`
      )
    })
  },
}

// 값 수정
user.age = 32
console.log(user.age)

// 타입 확인
const aaa = 124563
console.log(typeof aaa)

user.printWorks()
