## 리액트의 re-rendering

### 비교

- vanillaJS
  - 변경으로 인해 Element를 다시 그림
- React
  - 개발자 도구에서 확인 시 바뀐 component 부분만 re-rendering이 된다.
  - React Element는 immutable object고 Reconciliation을 하고 난 이후에 virtual DOM을 활용한다.

### 내부 알고리즘

- [reconciliation](https://ko.reactjs.org/docs/reconciliation.html)
- Element 타입이 바뀌면?
  - 이전 Element를 버리고 새로 rendering
- Element 타입이 같다면?
  - (key를 먼저 비교하고) props를 비교해서 변경사항을 반영

