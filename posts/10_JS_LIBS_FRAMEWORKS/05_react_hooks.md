## Class Componet VS Functional Component

**Class Component는 state LifeCycle로 동작한다, 그러나 functional은 hooks로 관리**

**유의사항: 직접수정X / 비동기적일 수 있음(Class Component 경우: `this.state = 객체` X - Rerendering이 되지 않기 때문에**(Functional component의 경우는 신경 안써도 된다.)

- `componentDidMount()` = `useEffect()`와 동일
- `componentWillUnmount()` = `useEffect안 return`과 동일

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

## 컴포넌트 상태 다루기

**Component 내의 state는 자신의 출력값을 변경**하기 위한 목적

- `React.useState()`

  - lazy initialize
  - 기존에 `setState()`를 함수를 만들어서 변경 하던 행위 대신 React 안에 있는 `React.useState()` 메서드를 통해서 쉽게 변경할 수 있다.

- DOM: 논리 트리
- Component: Element의 집합
- Element: Component의 구성요소
- `useState()`: state(상태)를 관리해주는 hook

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
    set
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

## 컴포넌트 사이드 이펙트

'사이드 이펙트 = 부작용'의 의미이지만 부정적인 의미가 아니라 부수 효과를 의도적으로 적용하는 것을 볼 수 있다.

- `React.useEffect()`
  - Dependency array
  - state가 바뀔 때마다 계속 render가 되지만 말그래도 부수효과. 즉, 특정 effct를 주어서 원하는 state값이 변경될 때만 render가 되도록 하는 것을 의미한다.
  - `[]`(dependency array)안에 넣지 않으면 모든 것에 반응한다. **단! '처음' 딱 한번만 동작**

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

## 컴포넌트 생명주기 (Life Cycle)

- Class Component의 경우에 해당
- 모든 컴포넌트는 'life cycle' 메서드를 가진다.
- [Life-cycle:docs](https://ko.reactjs.org/docs/react-component.html)
- [reference](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

### Class Component 순서

1. `constructor()`

- state 초기화 및 메서드 바인딩

2. `componentDidMount()`

- DOM 노드 초기화 및 데이터 fetch

3. `componentWillUnmount()`

- 타이머 제거 및 요청 취소 및 구독 해제

### Functional Component의 경우 (순서)

1. `useState()`
2. `render()`
3. `useEffect()` (side)

## Ref로 DOM 다루기

- VanillaJS

  - `document.get~` or `document.querySelector()~`

- React
  - `useRef()`
