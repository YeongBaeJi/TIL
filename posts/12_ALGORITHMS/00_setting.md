# 코딩테스트 준비

Node.js 환경에서 코딩테스트를 하는 방법

## fs 모듈

`readline` 모듈보다는 `fs`를 이용해 파일 전체를 읽어 들여 처리하는 방식

#### 예시

input.txt파일을 생성하여 *입력*값을 넣고 `fs.readFileSync(파일명)`로 연결하여 `input`변수에 값을 가져온다.

```js
let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

// BackJoon Online Judge에서 활용하는 방식
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
```

## readline 모듈

`readline`모듈을 활용할 경우 *Terminal에서 '입력' 값*을 직접 넣는다.

```js
const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on('line', function (line) {
  // 입력
  line = '';
  // 콘솔 입력 창에 입력!하고 줄바꿈(Enter)를 입력할 때마다 호출
  input.push(line);
  // 아래 close코드에서 ctrl+c 처리 안할꺼면 여기서
  // rl.close();
}).on('close', function () {
  // 콘솔 입력 창에서 Ctrl + C 혹은 Ctrl + D를 입력하면 호출(입력의 종료)
  console.log(input);
  process.exit();
});
```
