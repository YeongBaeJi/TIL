# React

## 기초 정보

1. SPA (Single Page Applications)
2. React는 library.

- ajax, routing, state management를 기본내장하지 않음.
- View를 처리하는데 집중, 그외에 모듈은 추가해서 사용 state management를 위햇 Flux Architecture 권장
- SPA는 single page라서 뒤로가기 하게될 경우 history 없다. 그걸 routing을 통해서 history에 넣어주도록 할 수 있다.

3. Component 단위의 개발 효율성
4. View 작업에 좀 더 집중(rendering 동작,성능은 프론트개발자가 신경안쓰게)
5. HTML과 유사한 jsx문법
6. virtual DOM으로 조작을 효율적.

- http://i.stack.imgur.com/S1vng.png
- React Component객체와 실제DOM을 비교하지않고 virtualDOM과 비교.
- 변경이 일어난 부분만 수정하려고 노력
- 재사용을 하면서 속성을 변경할 수 있으면 그렇게 변경

7. _ES6기반_
8. ES6 문법, Moduleloader, jsx 전환을 위해 webpack기반의 트랜스파일링 필요

## JSX

- React에서 사용하는 표준 HTML template 문법
  1. render() 안에서 작성
  2. 실제 DOM 생성을 위해 필요
  3. React는 JSX로 표현만 해두면, DOM API를 직접 사용하지 않고 DOM에 변경을 할 수 있다. (document.getElem.. 이거 안씀)
- _[JSX 문법 규칙](https://react-anyone.vlpt.us/03.html)_
