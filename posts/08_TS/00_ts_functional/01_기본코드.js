/**
 * Todo: 합성하기 어려운 부수효과: for문
 * * 명령형은 상태가 변한다 / 복잡해서 실수하기 쉽다 => 즉 합성하기 어렵다.
 * * for, while은 상태를 변경하고 불변성을 위반! 하기 때문에 '함수형 프로그래밍'에선느 원칙적으로 사용하지 않는다.
 * * 순수함수형 프로그래밍에서는 for,while 대신 재귀함수를 사용한다.
 * * 순수함수로 쪼개서 재귀함수를 섞어, 같은 기능을 js의 Array를 이용하여 만든다.
 */

// ? 1. 기존 함수
function sum_1_to_100() {
  // * 여기서 sum, i 같이 값이 변하는 것은 사용 할 수 없다.
  let sum = 0;
  for (let i = 0; i <= 100; i++) {
    sum += i;
  }
  return sum;
}
console.log("1.", sum_1_to_100()); // 5050

// ! 2. 재귀 함수
// ! 순수함수이지만 여전히 복잡하다
function sum_1_to_100_recursion() {
  function go(sum, i) {
    if (i > 100) {
      return sum;
    }
    return go(sum + i, i + 1);
  }
  return go(0, 1);
}
console.log("2.", sum_1_to_100_recursion()); // 5050

// ! 3. 일반화된 방식으로 추상화
// ! 반복 가능한 자료구조, 추상화된 함수 활용 => 순수하고 선언적 합성이 쉽다!
// ! 재사용 가능, 예측, 테스트 쉽다
// * acc = acceleration
function loop(fn, acc, list) {
  if (list.length === 0) return acc;

  // * 맨 앞 1개 요소만 head, 나머지는 ...tail로
  const [head, ...tail] = list;
  return loop(fn, fn(acc, head), tail);
}

// * 일급객체: 여기서 함수는 인자로 넘기는 값처럼, 고차함수 구현도 가능.
// * JS에서는 filter, map, reduce같은 이런 함수들이 이미 내장되어 있다
const range = (start, end) =>
  Array.from({ length: end - start + 1 }, (_, index) => index + start);

const plus = (a, b) => a + b;
console.log("3.", loop(plus, 0, range(1, 100))); // 5050
