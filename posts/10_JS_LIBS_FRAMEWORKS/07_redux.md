# Redux

Redux is a **predictable `state` container** for JavaScript apps.
(Redux는 자바스크립트 앱을 위한 예측 가능한 상태 컨테이너입니다.)

## 요약

- 전역 상태 관리 툴
- 단방향 데이터state흐른(Flux)
- 구성 요소 (Store/Reducer/Action/Selector)

## Provider

## 왜 Redux를 써야하는가?
1. Props 문제 
props가 부모,자식 관계만 상관이 없는데 3단계 4단계 이상 넘어가면 문제가 커진다. props 자식에서 부모가 어디서왔는지 찾기위해서 어려워진다. 이때 해결해주는게 Redux ,웬만하면 redux 사용추천.

### Flux (Redux 사용 전 알아야할 개념)

- [Flux:React](https://reactjs.org/blog/2014/05/06/flux.html)

- one way data flow
  - multiple components isssue
  - lifting state up
  - Extract shared state from the component tree
- immutable
  - object / array
  - ...spread
- Terminology
  - action {type, payload}
  - reducer (state, action) => newState
  - store (state lives) created by passing reducer
  - dispatch only way to update state(pass in an action object)
  - selectors extract specific pieces of information from a store state
- initial setup
  - store created by using reducer function
  - store calls root reducer once save initial state
  - UI first rendered
- Updates
  - something happend / dispatch action
  - store run reducer with prev state & current action save new state
  - notifies all parts store has been updated / Each UI Check update
  - need to changed UI re-render

---

## Redux-toolKit

Redux 라이브러리들의 조합. 기존에 Redux 방식보다 조금 더 편리하게 사용할 수 있다.
(lib. immer/redux-saga/redux-thunk/reselect)
