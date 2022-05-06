# TypeScript?

## Ready for TS

- JavaScript에 static types을 포함하여 추가적인 기능을 제공
- types를 사용하는 것은 선택이다.
- Back-end, Front-end에서 모두 사용할 수 있다.
- ES6, ES7의 대부분의 특징들을 포함한다.

### Dynamic VS Static Typing

- Dynamic: Javascript, Python, Ruby, PHP
- Static: Java, C, C++, Rust, Go

Dynamically typed language들의 타입은 런타임(실행 환경)과 관련되어있다.
Statically typed language들은 변수, 함수 파라미터, return 값 등에 type을 명확하게 정해줘야 한다.

### Compiling TypeScript

- TypeScript는 `.ts` and `.tsx` 파일 확장자를 사용한다.
- TSC(TypeScript Compiler)는 `.ts`파일을 `.js`로 컴파일한다.
- TSC를 통해 watch 기능과 error 탐지를 할 수 있다.
- 대부분의 IDE 또는 Code Editor는 TS를 지원하고 있다.
- `tsconfig.json` 파일을 통해서 TS를 사용하기 위한 환경설정을 할 수 있다.

### Install

1. `npm i -g typescript`

### CLI

1. `tsc 파일명bbb`
2. `tsc --watch 파일명`
3. `tsc --init` (tsconfig 생성)

## TS 사용법

### 기본 type 정의

```
let id: number = 5;
let company: string ='Traversy';
let isPublished: boolean = true;
let x: any = 'Hello';

let ids: number[] = [1,2,3,4,5];
let arr: any[] = [1, true, 'Hello'];
```

### Tuple

```
// Tuple
let person: [number, string, boolean] = [1, 'Brad', true];

// Tuple> Array
let employee: [number, string][]

employee = [
  [1, 'Brad'],
  [2, 'John'],
  [3, 'Jail'],
]
```

### Union

```
let pid: string | number
pid = '22'
```

### Enum

```
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}
console.log(Direction1.Down);

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}
console.log(Direction2.Up);
```

### Object

```
// 1. type 없이
const user: {
   id: number,
   name: string
 } = {
   id: '1',
   name: 'john'
 }

// 2. type을 통해서 축약
// 1) 간단하게
type Member = [number, boolean];

// 2) 여러개 객체 형태
type User = {
  id: number,
  name: string
}

// 3) key를 묶어서 지정
// type User = {
//   [key: string] : string,
// }

const user: User = {
  id: 1,
  name: 'john'
}
```

### Type Assertion

```
// Type Assertion
let cid: any = 1

// 동일함
// let customerId = <number>cid
let customerId = cid as number
```

### Function

```
// Function
// 함수명(parameter type): return type {}
// parameter에 type설정 안하고 싶으면 tsconfig에서 noImplicitAny: false로 바꾸면 된다
function addNum(x: number, y: number): number {
  return x + y;
}
console.log(addNum(1, 2));

// return  값에 대한 type이 필요 없어서 void로 설정
function log(message: string | number): void {
  console.log(message);
}
log('Hello');
```

### Interface

```
/ Interfaces
// custom type or specific structure to an object or function
// '?'마크는 아래 age에 대한 property value를 할당하지 않았지만 optional하게 ?를 통해 정의가능
interface UserInterface {
  readonly id: number,
  name: string,
  age?: number
}

const user1: UserInterface = {
  id: 1,
  name: 'john'
}

// 'readonly' 설정으로 value할당이 안된다.
// user1.id = 5

// type과 interface 차이
// type은 primitive, union이 될 수 있지만
// type Point = number | string
// const p1: Point = 1

interface MathFunc {
  (x: number, y: number): number
}

// 같은 interface로 return값만 바꿀 수 있다.
const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y
```

### Classes

```
interface PersonInterface {
  id: number,
  name: string,
  register(): string
}

class Person implements PersonInterface {
  // private id: number
  // protected id: number
  id: number
  name: string

  // new키워드로 instance가 만들어지자마자 constructor()가 실행된다.
  // constructor() {
    // brad로 instance를 만들자마자 console.log가 실행된다.
    // console.log(123)
  // }

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }

  register() {
    return `${this.name} is now registered`
  }
}
const brad = new Person(1, 'Brad');
const mike = new Person(1, 'Mike');

// console.log(brad, mike)

// Class안 property의 value를 바꾸려고 접근 가능. 그러나 키워드를 설정 시
// private: class안에서만 접근
// protected: class안에서만 또는 외부 extended 됐을 경우
// public은 dafault라서 생략가능
// brad.id = 5;

console.log(brad.register())
```

### SubClasses

```
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        //! Person constructor에 있는 id,name을 상속 받는다.
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(3, 'Shawn', 'Developer')
console.log(emp.register());
```

### Generics

기본적으로 'Reusable Components'를 빌드하기 위해서 사용한다.

```
//! 1. generics 변형 전
function getArray(items: any[]): any[] {
  return new Array().concat(items)
}

let numArray = getArray([1,2,3,4])
let strArray = getArray(['brad', 'john', 'jill'])

// generics 없이 이부분에서 error가 발생 안한다. number가 아닌 string을 넣었는데...
numArray.push('hello')

// 2. generics 변형 후
// 즉, getArray함수를 가지고 변수에 할당 할때마다 type을 다르게 적어서 재사용가능하다.
// type에 대한 placeholder 개념
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['brad', 'john', 'jill'])

// number가 아니라서 error 발생
numArray.push('hello')
srtArray.push(1)
```
