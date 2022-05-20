# Hooks

Hooks의 의미: 낚시 바늘(갈고리)

React 16.8버전부터 새로 추가되었습니다.
class 바탕으로 코드를 작성할 필요 없이 state 값을 사용할 수 기능입니다.

## 왜 React Hooks를 사용하는가?

react 16.8 버전 이전에는...
많은 기능을 제공하지만 더 길고 복잡한 코드로 작성했었다.
함수형 컴포넌트는 이전에도 있었지만 클래스컴포넌트에서 제공하는 라이프사이클을 사용할 수 없었기에 클래스 컴포넌트를 사용했었다. 그렇지만 Hooks의 등장으로 대체할 수 있게 되었다.

## Class Componet VS Functional Component

**Class Component는 state LifeCycle로 동작한다, 그러나 functional은 hooks로 관리**

**유의사항: 직접수정X / 비동기적일 수 있음(Class Component 경우: `this.state = 객체` X - Rerendering이 되지 않기 때문에**(Functional component의 경우는 신경 안써도 된다.)

- `componentDidMount()` = `useEffect()`와 동일
- `componentWillUnmount()` = `useEffect안 return`과 동일

#### Life Cycle in Class Component

3. `componentWillUnmount()`

-

1. Client.jsx에서 rendering 되는 순간
2. 해당컴포넌트.jsx에서 class 안에 `constructor(생략)`를 포함해서 state, 함수, ref들이 다 붙는다.(메서드 binding)
3. 전체를 `render()`로 한번 한다.
4. 첫 rendering이 끝난후 `componentDidMount()` 실행하여 DOM 노드 초기화 및 데이터 fetch.
5. `setState`나 `props`를 바꿔서 re-rendering이 되면 `shouldComponentUpdate()`가 실행(return true경우만, false면 안일어난다)
6. re-rendering 이후에 `componentDidUpdate()`
7. 부모가 나를 없앴을 때 `componentWillUnmount()` 이후 화면에서 소멸
8. 간단 요약
   `constructor(생략)` > `render()` > ref > `componentDidMount()` > (setState/props) 바뀔때 > `shouldComponentUpdate(true)` > `render()` > `componentDidUpdate()`

   부모가 나를 없앴을때 > `componentWillUnmount()` > 소멸

#### Functional Component의 경우

1. `useState()`
2. `render()`
3. `useEffect()` (side)

#### 예시

```
// class
constructor(props) {
  super(props);
  this.state = {date: new Date() };
}

componentDidMount() {
  this.timerID = setInterval(() => this.tick(), 1000);
}

componentWillUnmount() {
  clearInterval(this.timerID);
}

tick() {
  this.setState({date: new Date()});
}
```

```
// function

const [date, setDate] = useState(new Date());

const tick = () => {
  setDate(new Date());
}

useEffect(() => {
  const timerID = setInterval(() => tick(), 1000);

  return () => {
    clearInterval(timerID);
  }
})
```

## 알아야할 개념

- DOM: 논리 트리
- Component: Element의 집합
- Element: Component의 구성요소

## 무엇을 지원하는가?

#### `useState()`

- **Component 내의 state는 자신의 출력값을 변경**하기 위한 목적
- lazy initialize
- `const = [data, setData] = useState()`는 array를 return

#### `useEffect()`

`useEffect() = side Effects`

> '사이드 이펙트 = 부작용'의 의미이지만 부정적인 의미가 아니라 부수 효과를 의도적으로 적용하는 것을 볼 수 있다.

state가 바뀔 때마다 계속 render가 되지만 말그래도 부수효과. 즉, 특정 effct를 주어서 원하는 state값이 변경될 때만 render가 되도록 하는 것을 의미한다.

##### 특징

- rendering이 이후에 일어난 후속 처리
- 서버에서 data를 받아올 때도 사용
- side effects로써 life cycle event와 유사하게 작동

  - componentDidMount, componentDidUpdate, componentWillUnmount 3개와 같은 기능
  - lifecycle 순서 in Class Component
    `constructor > componentWillMount > render > componentDidMount`

- `[]`(dependency array) 안에 넣지 않으면 모든 것에 반응한다. **단! '처음' 딱 한번만 동작**
- `[state]` 바뀌는 state값이 있다면 []이 바뀔때 실행한다.

##### 예시

```
// App 자체가 Component
const App = () => {
  const [keyword, setKeyword] = React.useState(() => {
    console.log('init');
    return window.localStorage.getItem('keyword');
  });
  const [result, setResult] = React.useState("");
  const [typing, setTyping] = React.useState(false);

  console.log('render');

  // side Effect를 주고 싶은 대상 state만 []안에(dependency array) 넣어준다. []안에 넣지 않으면 모든 것에 반응한다.
  // 단! '처음' 딱 한번만 동작
  React.useEffect(() => {
    console.log("effect");
    window.localStorage.setItem("keyword", keyword);
  }, [keyword, typing])

  function handleChange(e) {
    setKeyword(event.target.value);
    setTyping(true);
  }

  function handleClick() {
    setTyping(false);
    setResult(${keyword});
  }

  return (
    <>
      <input onChange={handleChange} />
      <button onClick={handleClick}>search</button>
      <p>
        {`Looking for ${keyword}` : result}
      </p>
    </>
  )
}

ReactDOM.render(<App />, rootElement)
```

#### `useRef()`

DOM element에 접근

- VanillaJS

  - `document.get~` or `document.querySelector()~`

- React
  - `useRef()`

#### `useMemo()`

- 값을 기억, []에 넣어서 바뀌기 전까지.

#### `useCallback()`

- []이 비어있으면 계속기억. []안에 있으면 안이 바뀌기전까지 기억.

#### 예시

```
// App 자체가 Component
const App = () => {
  // 기존코드
  // let keyword = "";

  // 풀어보면
  /* const keywordState = React.useState("");
    const keyword = keywordState[0]
    const setKeyword = keywordState[1]
  */
  const [keyword, setKeyword] = React.useState("");
  const [result, setResult] = React.useState("");
  const [typing, setTyping] = React.useState(false);

  function handleChange(e) {
    // 기존코드
    // keyword = event.target.value;

    setKeyword(event.target.value);
    setTyping(true);
  }

  function handleClick() {
    setTyping(false);
    setResult(${keyword});
  }

  return (
    <>
      <input onChange={handleChange} />
      <button onClick={handleClick}>search</button>
      <p>
        {`Looking for ${keyword}` : result}
      </p>
    </>
  )
}

ReactDOM.render(<App />, rootElement)
```

## Hooks 사용 시 주의사항

1. 일반함수, 반복문, 조건문 안에는 `useState()`를 넣지 말자.

2. `useCallback()`은 자식컴포넌트에 `props`로 넘겨주는 함수에 감싸준다.(render 내부가 다 자식 컴포넌트다.)
   ex. `<button onClick={clickHandler}>`에서 clickHandler에 감싸주지 않으면 onClick 함수가 re-rendering 될 때마다 함수가 새로 생성되는 문제가 있다. 그렇기 때문에 `[]`를 사용하는 것이다.
   (새로 만들어주어야 하는 특별한 경우가 생기는데(useCallback에서 사용하는 state가 바뀐다거나) 그럴 때 새로 만드는 기준이 될 state를 배열 안에 넣어줍니다.)
