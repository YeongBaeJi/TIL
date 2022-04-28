# JS Object, Array 다루는 법

## 구조 분해 할당 (Destructuring Assignment)

#### 비구조화 할당

**Object는 key값으로 value를 찾아오지만 Array는 할당 될 때 순서대로 할당 된다는 차이를 알아두자**

1. Object

```
const user = {
  name: 'James',
  age: 20,
  email: 'james@gamil.com'
}

const { name, age, email } = user;

// 기본값 지정
const { name, age, address='seoul' } = user;
```

2. Array

```
const fruits = ['Apple', 'Banana', 'Cherry'];
const [a, b, c, d] = fruits;
const [, b] = fruits;
const [, , c] = fruits;

// Apple, Banana, Cherry, undefined
console.log(a, b, c, d);

// Banana
console.log(b);

// Cherry
console.log(c);
```

## 전개 연산자 (Spread Operator)

배열이나 문자열과 같이 반복 가능한 문자를 0개 이상의 인수 (함수로 호출할 경우) 또는 요소 (배열 리터럴의 경우)로 확장하여, 0개 이상의 키-값의 쌍으로 객체로 확장시킬 수 있습니다.

```
const fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits);
// 'Apple', 'Banana', 'Cherry'
console.log(...fruits);

function toObject(a, b, c) {
  return {
    a,
    b,
    c,
  }
}
// 기존 방식
console.log(toObject(fruits[0], fruits[1], fruits[2]));

// spread operator 방식
console.log(toObject(...fruits));
```

```
// rest parameter
function toObject(a, b, ...c) {
  return {
    a,
    b,
    c,
  }
}

// 'Apple', 'Banana', Array(2)
console.log(toObject(...fruits));
```

ES6 version

```
// es 6
const toObject = (a, b, ...c) => ({a, b, c})
```

## 불변성 (Immutability)

한번 데이터가 생성되면 그 데이터가 가리키는 메모리 주소가 동일해서 데이터가 변하지 않는다는 의미.

1. 원시데이터

- String, Number, Boolean, undefined, null
- **원시형 데이터는 불변**

2. 참조형 데이터

- Object, Array, Function
- **참조형 데이터는 불변이 아니다.**
  - 참조형 데이터는 메모리 주소를 참조하기 때문에 그 주소에 있는 값이 바뀌면 참조하고 있는 모든 변수의 값이 바뀐다.

```
let a = {k:1}
let b = {k:1}
console.log(a,b, a===b)
a.k=7;
b=a;
console.log(a,b, a===b)
a.k=2;
console.log(a,b, a===b)
let c=b;
console.log(a,b,c, a===c)
a.k=9
console.log(a,b,c, a===c)
```

### 얕은 복사 (Shallow copy)

참조형 데이터 값이 변해서 다른 변수에 할당한 값에도 문제를 준다. 이를 보완하기위해 `Object.assign()`으로 복사를 하자

```
const user = {
  name: 'jay',
  age: 20
}
const copyUser = user

// 방법1: 새로운 메모리 주소에 할당하는 방식
const copyUser = Object.assign({}, user)

// 방법2: spread operator활용
// shallow copy
const copyUser = {...user}

user.age = 30;

// shallow copy의 문제점: copy한 객체가 다른 메모리 주소를 바라보고 있으나 안에 값까지 다르지는 않다. 그래서 문제다.
user.emails.push('new@email.com');
console.log(user.emails === copyUser.emails); // true

```

### 깊은 복사 (Deep copy)

위의 shallow copy의 문제점을 보완하기 위해 deep copy를 이용하자. 그러나 복잡하기 때문에 lodash.js를 활용.

```
import _ from 'lodash';

const copyUser = _.cloneDeep(user);

user.age = 30;
user.emails.push('new@gmail.com');

console.log(user.emails === copyUser.emails); // false
```
