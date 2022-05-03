# The Javascript Survival Guide (자바스크립트 생존가이드)

JS언어의 기초적인 특징들을 살펴보자.
JS언어의 이상한 특징들을 살펴보자.

## How to Run JS (JS를 실행하는 방법)

2가지 실행 환경이 존재한다.

1. Node.js

- Node.js는 JS만들어진 런타임(언어가 실행되는 환경)
- 그렇기 때문에 local에 terminal에서 `node`라는 명령어로 js파일을 실행시킬 수 있다.

2. in Browser

- JS엔진이 브라우저에 내장되어 있어 개발자도구에서 js코드를 쉽게 사용할 수 있다.
- 실질적으로 JS가 코드를 사용하는 것은 HTML파일에서 `<script>`태그를 통해 작성하고 실행시킨다. 브라우저가 html파일을 parse(분석하다)하고 실행시킨다.
- `<script>`안에 attribute로 `defer`를 사용하면 html이 모두 load될 때 까지 `<script>`를 읽지 않는다.

## Primitives & Objects (기초요소&객체)

1.  primitives Type

- `String`, `Number`, `Boolean`, `Undefined`, `Null`, `BigInt`, `Symbol`

2. Objects
   > **If It is not a primitive Then it is an object.** > **만약 원시적인 것이 아니라면 그것은 객체이다.**

- 기본적으로 Primitives Type들은 `immutable`(불변)하다.
- 그러나 `function`, `array`, `object`, 또는 `class instances`들은 mutable한 것들이다.

```
let x = {}; // define
x['foo'] = 'bar' // mutate
console.log(x); // {foo: 'bar'}
```

#### Primitive wrapper Objects

primitive type의 wrapper object들을 굳이 사용할 이유가 없다.
예를 들어 `var foo = String('hello');`같은 경우 `var foo = 'hello'`로 쉽게 선언과 할당을 할 수 있기 때문이다.

## Control flow truthy and falsy

⚠️ **정말 주의해야할 JS의 이상한 부분**

#### JS에서 false인 것들 7가지

- `undefined`
- `null`
- `NaN`
- `0`(숫자 리터럴), `-0`
- `""`(빈 문자열)
- `false`

아래 코드는 `!`를 통해서 `false`인 값을 알아 볼 수 있다.

```
// all of false
console.log(!!undefined);
console.log(!!null);
console.log(!!NaN);
console.log(!!0);
console.log(!!-0);
console.log(!!"");
console.log(false);
console.log(!!false);

console.log(true); // true
console.log(!! {}); // true
console.log(!! []); // true

console.log(!! ''); // false
console.log(!! 'hi'); // true

console.log(!! 0); // false
console.log(!! 1); // true
```

기본적으로 `!`(exclamation mark)는 논리적인 연산자(operator)가 아니다. 그러나 이렇게 이상한 현상을 발생시킨다.
논리적인 연산자(logical operator)는 `&&`, `||`을 말한다.

#### '===' vs '=='

- `==`와 달리 `===`는 type까지 비교하기 때문에 더 정확하다.

```
var x = '23' == 23;
console.log(x); // true

var x = '23' === 23;
console.log(x); // false
```

## ternary operator (삼항 연산자)

ternary operator를 통해 `if`문을 간단하게 사용할 수 있다.

```
let x = truthy ? 1 : 2;

if (truthy) {
  x = 1;
} else {
  x = 2;
}
```

## Switch

조건에 대한 확인이 많으면 `if~else`에 대안이 될 수 있다.

```
const expression = 'dog';

switch(expression) {
  case 'dog':
    console.log('🐕');
    break;

  case 'cat':
    console.log('🐈');
    break;
}
```

## try / catch / finally

`try~catch`는 `try`블록이 실패하면 `catch`로 제어권을 넘겨야할 때 사용한다. `try`블록에서 예외를 던지면 그 즉시 `catch`블록으로 실행 제어권이 넘어간다. `try`블록 내에서 예외가 발생하지 않으면 `catch`블록은 실행되지 않는다.
`finally`블록은 `try`블록 안에서 예외가 발생했는지 관계 없이, `catch`블록이 없어도 항상 실행된다.

```
try {
  console.log('works 😃');
} catch (error) {
  console.log('broke 💀');
} finally {
  console.log('always works 😃');
}
```

## variables / execution context

variable scope와 execution context를 이해하기 위해 아래 코드를 참고하자.

1. `const`는 재할당이 불가능하다.

```
var x = 'x';
x = 'change';
console.log(x); // change

let x = 'x';
x = 'change';
console.log(x); // change

const x = 'x';
x = 'change';
console.log(x); // Assignment to constant variable. 
```

2. `let`,`const`는 재선언이 불가능하다.

```
var x = 'x';
var x = 'change';
console.log(x); // change

let x = 'x';
let x = 'change';
console.log(x); // Identifier 'x' has already been declared

const x = 'x';
const x = 'change';
console.log(x); // Identifier 'x' has already been declared
```

3. `let`, `const`는 지역변수, `var`는 지역변수를 찾지 못하면 전역변수를 찾는다.

```
const g = 'global';

function app(){
  const l = 'local';
}
console.log(l); // l is not defined

function app(){
  let l = 'l'

}
app();
console.log(l); // l
```

4. `let`,`const`는 scope of block statement(function에서도 마찬가지다.)

```
if (true) {
  var x = 'x';
}
console.log(x); // x

if (true) {
  let x = 'x';
}
console.log(x); // x is not defined

if (true) {
  const x = 'x';
}
console.log(x); // x is not defined
```

## Hoisting

- `var`: hoisting되어 `undefined`를 출력
- `let`: `Cannot access 'x' before initialization`, 초기화 전에 접근할 수 없다.
- `const`: `SyntaxError: Unexpected token` 값을 할당하지 않고서는 안된다. `const a = 'a'` 이런식으로 작성해야한다.

```
// it's like x is actually up here
console.log(x); // undefined
var x;

console.log(x); // Cannot access 'x' before initialization
let x;

console.log(x); // SyntaxError: Unexpected token
const x;
```

## function

ES 6에서 `return`, `{}` 생략이 가능하다

```
// es 5
function func(input) {
  return input;
}

// es 6
const func = (input) => input
```

### High Order Functions (고차함수)

- 하나 이상의 함수를 argument로 받는다
- 함수를 결과로 return한다.

```
const twice = function(f, v) {
    return f(f(v));
};

const plusOne = function(v) {
    return v + 1;
};

console.log(twice(plusOne, 1)); // 3
```

```
const twice = function(f, v) {
    return f(f(v));
};

const square = function(v) {
    return v * v;
};

console.log(twice(square, 2)); // 16
```

### Closure

함수는 실행후 결과를 return하고 종료되는데도 불구하고 `inner()`의 기능이 여전히 살아있으면 `outer()안에 변수들의 접근이 가능하다`

```
function outer() {
  const fish = '🐠';
  let count = 0;

  function inner() {
    count++;
    return `${count} ${fish}`
  }
  return inner
}

const func = outer();
console.log(func()); // 1
console.log(func()); // 2
console.log(func()); // 3
```

---

#### 참고 자료

- [Fireship](https://www.youtube.com/watch?v=9emXNzqCKyg)
- [HOF](https://medium.com/@la.place/higher-order-function-%EC%9D%B4%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80-1c61e0bea79)
