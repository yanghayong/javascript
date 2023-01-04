// 반복문
// 조건이 참일 때 실행

// while 문
let i = 3

while (i > 0) {
  console.log(i)
  i--
}

// for 문
// 변수초기화; 조건; 증감식

for (let j = 3; j > 0; j--) {
  console.log(`j는 ${j}`)
}

const day = ["월", "화", "수", "목", "금", "토", "일"]

for (let index = 0; index < day.length; index++) {
  console.log(day[index])
}

// break, continue
// 0 ~ 10 -> 7까지만 출력
for (let i = 0; i <= 10; i++) {
  if (i > 7) {
    break
  }
  console.log(i)
}

// 0 ~ 10 -> 홀수만 출력
for (let j = 0; j <= 10; j++) {
  if (j % 2 != 0) {
    continue
  }
  console.log(j)
}
