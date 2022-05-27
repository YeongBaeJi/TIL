# TypeScript VS JavaScript

Typescript는 JavaScirpt의 super set.
(super set: JS에서 지원하는 모든 기능 + 추가 기능)

## TypeScript의 명확한 type 지정

`number`라는 type으로 지정할 수 있지만 중복되는 경우와 어떤 `number`인지 정확하게 지정해주기 위해 `type`이라는 명령어로 정의할 수 있다.

```
type Centimeter = number;
type RainbowColor = 'red' | 'orange' | 'yellow';

let age = 10;
let weight: number = 80;
let height: Centimeter = 177;

let color:string = 'red';

// error: 위 type정의에 속하지 않는다.
color = 'black';
```
