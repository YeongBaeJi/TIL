# Typescript 함수형 프로그래밍

- [github-자료](https://github.com/JsonKim/fastcampus-fp-typescript)

## 명령형 VS 함수형(선언형)

- 명령형: 기계에게 효율적인 방식
- 함수형: 인간이 이해하기 쉬운 방식 (작게 나누어서 한번에 이해하는 양이 작아서 쉽다.)

## 함수형 프로그래밍 사용?

1. 프로그램을 작은 순수형 함수로 '분리'하고 이 각각의 것들을 '합성'하여 더 큰 프로그램을 만드는 원리 (불변성, 일급함수, 게으른 평가 = 잘 합성하기 위한 개념)
2. 함수를 '합성'해서 복잡한 프로그램을 쉽게 만들기 (안전한 방법으로 나누는 방법)

## In real world

- rescript (ReasonMl에서 나온 js로 컴파일)
- _함수형 프로그래밍이 특정 언어만 써야 하는것은 아니다.(TS로도 적용하여 만들수 있다)_
  - Array, map
  - 비동기 Promise와 async
  - reactive Observable

## 기억할 것

1. 순수함수(pure function: input을 보고 output을 예측할 수 있는 부수효과가 없는! 함수)
2. 기존 프로그래밍에서는 합성하는게 까다롭다. 그러나 함수형으로는 작은 함수들을 합성해서 복잡한 프로그램을 만드는 취지.
3. 함수형 프로그래밍에서 '순수함수'만 사용하는 이유는 '합성'을 쉽게 하기 위해서이다. 함수형 프로그래밍에 모든 함수를 '순수함수'이다. 그리고 '부수효과'가 포함되지 않는다!

## 추후

1. 함수형 프로그래밍의 기원은 Lambda를 찾아보자
