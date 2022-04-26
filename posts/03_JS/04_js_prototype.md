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

// 모든 instance에 '__proto__'속성을 가지고 있고 'getFullName() 메서드를 가지고 있다.
user.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`
}

const first = new user('one', 'two');
const second = new user('two', 'three');
const third = new user('three', 'four');

console.log(first.getFullName())
```
