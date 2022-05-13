## 컴포넌트 상태 다루기

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

## Ref로 DOM 다루기

- VanillaJS

  - `document.get~` or `document.querySelector()~`

- React
  - `useRef()`
