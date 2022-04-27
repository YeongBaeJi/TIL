# Class (ES6)

JS는 prototype기반 언어이라 class기반 언어와 다르지만 class 키워드를 지원하고있다.

축약 방법

```
const james = {
  name: 'James',
  // normal: function () {}
  normal() {} // es6
}
```

ES 5

```
function User(first, last) {
  this.firstName = first
  this.lastName = last
}

// __proto__에서 getFullName 함수를 찾을 수 있다.
User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}

```

ES6

```
class User {

  // constructor function(){}을 축약
  constrctor (first, last) {
    this.firstName = first
    this.lastName = last
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}
```

### constructor

- `constructor`는 인스턴스를 생성하고 클래스 필드를 초기화하기 위한 특수한 메소드이다.
  - 클래스 필드(class field)
    - 클래스 내부의 캡슐화된 변수를 말한다. 데이터 멤버 또는 멤버 변수라고도 부른다. 클래스 필드는 인스턴스의 프로퍼티 또는 정적 프로퍼티가 될 수 있다. 쉽게 말해, 자바스크립트의 생성자 함수에서 this에 추가한 프로퍼티를 클래스 기반 객체지향 언어에서는 클래스 필드라고 부른다.

```
// 클래스 선언문
class Person {
  // constructor(생성자). 이름을 바꿀 수 없다.
  constructor(name) {
    // this는 클래스가 생성할 인스턴스를 가리킨다.
    // _name은 클래스 필드이다.
    this._name = name;
  }
}

// 인스턴스 생성
const me = new Person('Lee');
console.log(me); // Person {_name: "Lee"}
```

## 상속 (확장)

- `super`
  - Vehicle에 있는 `name, wheel`을 상속받아서 Bicycle에서 사용 가능하다.
  - Vehicle에 `super(name, wheel)`은 Bicycle에 `constructor(name, wheel)`와 연결된다.

```
class Vehicle {
  constructor(name, wheel) {
    this.name = name
    this.wheel = wheel
  }
}

class Bicycle extends Vehicle {
  constructor(name, wheel) {
    super(name, wheel)
  }
}

class Car extends Vehicle {
  constructor(name, wheel, license) {
    super(name, wheel)
    this.license = license // super로 상속받고 여기서 나머지 추가
  }
}

```

---

[참고](https://poiemaweb.com/es6-class)
