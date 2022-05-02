# for in / for of 차이

자주 헷갈리는 ES6에서 추가된 두 가지에 대해 포스팅 해보자.

## for ~ in (객체 순환)

```
var obj = {
  first: 1,
  second: 2,
  third: 3
};

for (let item in obj) {
  console.log(item); // first, second, third
}
```

만약 객체에 `for ~ of`를 사용하면 `Uncaught TypeError: obj is not iterable` 에러 발생.

```
var obj = {
  first: 1,
  second: 2,
  third: 3
};

for (let item of obj) {
  console.log(item); // Uncaught TypeError: obj is not iterable
}
```

## for ~ of (배열 순환)

```
const arr = [1, 2, 3];

for (let item of arr) {
  console.log(item); // 1, 2, 3
}
```

만약 배열에 `for ~ in`을 사용하면?

```
const arr = [1, 2, 3];

for (var item in arr) {
  console.log(item); // 0, 1, 2
}
```

JS에서는 array도 object도 취급하여, key에 해당 하는 index값이 출력되어 버린다.

기억하자.
**`for ...in // 객체 순환`**
**`for ...of // 배열 값 순환`**
