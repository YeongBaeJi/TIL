# JS Execution Context (실행 컨텍스트)

## var / let / const

1. `var`는 `undefined`로 초기화 되고 'Object 환경레코드'에서 연결받는다.
2. `let, const`는 `undefined`로 초기화 되지 않고 'Declative 환경레코드'에서 연결받는다.

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

## 함수의 실행 컨텍스트

- garbage collection
  - 함수 파라미터에 정의된 변수는 따로 context가 생성되고 실행이 종료되면 사라진다

## 함수 준비 단계, 실행단계

- `function`키워드는 준비단계에서 실행 전 미리 선언되어 있다.
- 함수를 변수에 할당시키면 초기화 에러 메시지가 발생.

```
func(2); // cannot access func before initialization
const func = function(n){
  console.log(n);
}

func(2); // func is not a function
function(n){
  console.log(n);
}
```

## 스코프체인

## 이벤트 버블
