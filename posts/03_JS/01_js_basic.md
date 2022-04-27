# Javascript Basic

## 표기법

각 표기법은 해당 언어에서 사용하길 추천한다.

1. HTML/CSS

- dash-case(kebab-case)
- snake_case

2. JS

- camelCase
- ParcelCase

## 데이터

### primitive type

- String
- Numbering
- Boolean
- undefined
- null
- Symbol / BigInt

#### JS Type 특징

- **`typeof`사용시 `null`, `{}`, `[]`를 object로 취급한다**

```
console.log(typeof 'string'); //string
console.log(typeof 12); //number
console.log(typeof true); // boolean
console.log(typeof undefined); //undefined
console.log(typeof null); // object
console.log(typeof {}); // object
console.log(typeof []); // object
```

- `getType()`함수를 만들어서 type을 체크해보자

```
export default function getType(data) {
  return Object.prototype.toString.call(data).slice(8,-1)
}

console.log(getType(null)); // Null
console.log(getType({})); // Object
console.log(getType([])); // Array
```

#### JS string의 특징

- num+num = num
- num+str = str
- str+num = str
- str+str = str
- undefined+"str" = undeifine+a
- null+"str" = "nullstr"

### reference type

- object
  (JS에서는 array, function, object 모두 object로 취급하기 때문이다)

### Type conversion (형변환)

1. Truthy(참 같은 값)

- `true, {}, [], 1, 2, 'false', -12, '3.14'...`

2. **Falsy(거짓 같은 값)**

- `false, '', null, undefined, 0, -0, NaN`

## function

### return의 역할

1. `return`옆 코드로 결과를 반환하는 역할
2. `return`은 함수를 '종료'하는 역할을 하기 때문에 그 뒤에 코드는 실행되지 않는다.
3. 함수 내에서 어떤 변수를 `return` 시킨다면 함수가 끝나는 시점에 외부 참조가 없어서 가비지컬렉션에 의해 수거대상이 된다.

```
function sum(x, y) {
  if (x<2) {
    return; //여기서 종료되기 때문에 undefined 반환
  }
  return x + y;
  console.log(x); // nothing
}
sum(1,2);
```

### arguments

- `arguments`객체가 들어있고 배열index로 arguments가 각각 들어간다.
- parameter 대신 arguments를 쓰는 경우는 드물다

```
function sum(x, y) {
  console.log(arguments);
  return arguments[0]+arguments[1]; // 3
}
console.log(sum(1,2));
```

### JS custom 함수

```
export default function random() {
return Math.floor(Math.random()*10)
}
```

### Arrow function

```
const double = function(x,y) { return x * 2};

// 축약형
const double = x => x * 2

// array 축약
const arr = x => [1, 2, 3];

// object 축약
const obj = x => {name: 'error'}

// 위에 '{}'때문에 오류가 생겨 '()'로 감싸야 한다
const obj = x => ({name: 'error'})
```

### IIFE (즉시실행함수)

Immediately-Invoked Function Expression

- `(function() {})()`
- `(function() {}())`

```
(function(){
  console.log('IIFE-1');
})()

(function(){
  console.log('IIFE-2');
}())
```

### callback

함수의 argument로 사용되는 함수

```
// 3000ms 이후에 'done!'이 발생하는 코드를 만들기 위해 callback함수를 넣는다.
function timeout(callback) {
  setTimeout(() => {
    console.log('first');
    callback();
  }, 3000);
}

timeout(() => {
  console.log('done!');
})
```
