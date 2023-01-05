// 1. 배열 만들기
const arr1 = new Array()
console.log(arr1)

const arr2 = ["1", "2", 3, "안녕", 0.5, true, false]
console.log(arr2)

const arr3 = [
  "abc",
  { model: "apple", price: 50000 },
  { model: "galaxy", price: 60000 },
]

console.log(arr3[2].model)

// 2 배열의 출력
const books = ["html", "css", "javascript", "photoshop", "figma"]
console.log(books)
console.log(books.length)
console.log(books[1])
console.log(books[books.length - 1])

// 3. 반복출력
// for of
for (let i of books) {
  console.log(i)
}

console.log(`\\\\\\\\\\\\\\\\\\\\\\`)
// foreach
books.forEach((book) => {
  console.log(book)
})

// 4. 요소 추가 삭제
// 뒤에 추가
books.push("jquery")
console.log(books)

// 앞에 추가
books.unshift("react")
console.log(books)

// 뒤에것 삭제
books.pop()
console.log(books)

// 맨 앞에 것 삭제
books.shift()
console.log(books)

// 지정한 위치에서 추가, 삭제
books.splice(2, 1, "react", "vue")
console.log(books)

// 배열검색
console.log(books.indexOf("react"))
console.log(books.includes("git"))
