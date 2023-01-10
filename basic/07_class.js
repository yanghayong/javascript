// 탬플릿
// 한 번만 선언
// class에는 데이타가 없다.

// Object
// - class의 인스턴스
// - 복수 생성이 가능하다
// - 실제 데이타가 존재한다.

// 1. 클래스 선언
class Car {
  constructor(name, color) {
    this.name = name
    this.color = color
  }

  start() {
    console.log(`${this.name} is start!!`)
  }

  stop() {
    console.log(`${this.name} is stoped~~~~~~`)
  }
}

const myCar = new Car('sonata', 'white')

console.log(myCar.name)
console.log(myCar.color)
myCar.start()
myCar.stop()

const oldCar = new Car('pony', 'red')
oldCar.start()
oldCar.stop()
