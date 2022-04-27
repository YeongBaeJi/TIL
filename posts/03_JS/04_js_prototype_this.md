# Prototype

- [reference](https://poiemaweb.com/js-prototype)

- JS의 모든 객체는 부모역할을 하는 `prototype`객체를 상속받는다.
- 중복되는 코드를 생성자함수(class키워드 없이)로 만들어서 관리한다.
  - 일반함수와 구분을 위해 첫글자는 대문자이다.
- 메모리를 효율적으로 사용하기 위함이다.

```
const first = {
  firstName: 'first',
  lastName: 'last',
  getFullName: () => {
    return `${this.firstName} ${this.lastName}`
  }
}

const second = {
  firstName: 'second',
  lastName: 'last',
  getFullName: () => {
    return `${this.firstName} ${this.lastName}`
  }
}
```

```
function User(first, last) {
  this.firstName = first
  this.lastName = last
}

// 모든 instance는 '__proto__'속성을 가지고 있고 'getFullName() 메서드를 가지고 있다.
user.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`
}

const first = new user('one', 'two');
const second = new user('two', 'three');
const third = new user('three', 'four');

console.log(first.getFullName())
```

## this

- 일반(normal function)
  - 함수는 호출 위치에서 따라 this 정의!
- 화살표(arrow function)
  - 함수는 자신이 선언된 함수 범위에서 this 정의!

1. Object

```
const obj = {
  name: 'obj',
  normal: function() {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  }
}

obj.normal(); // 'obj'
obj.arrow(); // undefined

const other = {
  name: 'other',
  normal: obj.normal,
  arrow: obj.arrow
}

other.normal(); // 'other'
other.arrow(); // undefined
```

2. prototype

```
function User(name) {
  this.name = name
}
User.prototype.normal = function() {
  console.log(this.name)
}
User.prototype.arrow = () => {
  console.log(this.name)
}

const james = new User('James')
james.normal(); // James
james.arrow(); // undefined
```

3. method
   arrow function은 timeout이라는 함수고 그 함수가 선언된 범위는 timer까지이다. 그래서 name에 접근이 가능하다

```
const timer = {
  name: 'James',
  timeout: function() {
    setTimeout(function() {
      console.log(this.name)
    }, 2000)
  }
}
timer.timeout(); // undefined

const timer = {
  name: 'James',
  timeout: function() {
    setTimeout(() => {
      console.log(this.name)
    }, 2000)
  }
}
timer.timeout(); // James
```
