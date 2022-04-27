# JS Execution Context (실행 컨텍스트)

## var / let / const

1. `var`는 `undefined`로 초기화 되고 'Object 환경레코드'에서 연결받는다.
2. `let, const`는 `undefined`로 초기화 되지 않고 'Declative 환경레코드'에서 연결받는다.

## variables Scope

- `let`, `const`: 아래 예시에서 `let`도 동일하다.
  (block level scope)

- `var`의 경우는 값을 할당 하기 전에 출력하면 `undefined`, 값이 할당 된 후에는 그 값이 출력된다. (function level scope)

```
function scope() {
  console.log(a); // a is not defined
  if(true) {
    console.log(a); // cannot access 'a' before initialization
    const a = 123;
    console.log(a); // 123
  }
  console.log(a); // a is not defined
}
scope();
```

## TDZ (Temporal Dead Zone)

- [TDZ](https://noogoonaa.tistory.com/78)

```
let a = 100;
if(a>20){
  console.log(a); // cannot access 'a' before initialization
  let a = 10;
}
console.log(a); // 100
```

## 함수 준비 단계, 실행단계

- `function`키워드는 준비단계에서 실행 전 미리 선언되어 있다.
- 함수를 변수에 할당하기도 전에 '호출을 먼저' 해버리면 초기화 에러 메시지가 발생.
- **`function`안에 있는 변수(`var, let , const`)를 바깥에서 함부로 접근 할 수 없다**

```
func(2); // cannot access func before initialization
const func = function(n){
  console.log(n);
}

func(2); // func is not a function
function(n){
  let a = 'a';
  console.log(n);
}
console.log(a); // a is not defined
```

## 함수 호출 컨텍스트

- **함수 호출시에 global lexical environment이 아닌 function lexical environment가 생성된다.**
- garbage collection
  - 함수 파라미터에 정의된 변수는 따로 context가 생성되고 실행이 종료되면 사라진다

```
function first(a){
  var a = 0;

  function second(){
      var b = 0;

      function third(){

      }
  }
  second();
}
first(1);
```

위 코드에 대한 설명

1. 0번째 call stack

- global에 first 함수 생성과 outer 환경참조가 연결된다.

2. 1번째 call stack

- `first(1)`의 실행
- second 함수 생성

3. 2번째 call stack

- `second()`의 실행
- third 함수 생성

## Hoisting (호이스팅)

'함수 선언부'가 유효범위 최상단으로 끌어올려지는 현상

- 아래 코드, 선언부 일때 호이스팅 때문에 함수호출에서 문제가 발생하지 않는다.

```
// func is not a function
func();
const func = function() {
  console.log('not a function');
}

// 'no problem'
func();
function func() {
  console.log('no problem');
}
```

## 개발자도구에서 console.log로 코드에 접근할 수 없는 이유

- 개발을 하다가 브라우저에 결과 화면을 보고 개발자 도구에서 console.log로 접근 할 수 없다. 왜냐면 해당 함수가 종료되고 나서 가비지 콜렉션에서 처리했기 때문이다.

## closure (클로저)

## 스코프체인

## 이벤트 버블

## `[[scope]]`

- [scope 속성](https://www.freecodecamp.org/news/deep-dive-into-scope-chains-and-closures-21ee18b71dd9/)

## window

- [window](https://www.zerocho.com/category/JavaScript/post/573b321aa54b5e8427432946)
