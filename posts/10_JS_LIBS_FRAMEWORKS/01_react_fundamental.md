# React

## Ready

### Component

- Component는 `<TestComponent />`와 같은 형식이다. 이유는 그 컴포넌트 안을 출력해주는 용도라서 닫기태그가 필요없다.
- 왜? 대문자로 파일명을 짓는가?
  - HTML태그와 겹치지 않게하지 위한 규칙이다.

### library VS Framework

- 라이브러리는 개발 편의를 위한 '도구의 모음'
- 프레임워크는 '기반 구조까지' 잡혀있음
- 라이브러리는 공구
- 프레임워크는 공장

### React의 장점

인기가 많다고 기술적 근간이 좋은 것은 아니지만 리액트는 기술적으로 장점이 많다

- Virtual DOM
- JSX
- Flux
- Functional Programming

리액트를 풍성하게 해주는 라이브러리들이 많이 나오고 있다. (swr, framer motion 등..)

### DOM 다루기 Element 생성

Document Object Model
: 문서를 논리 트리로 표현

## JSX / Babel

1. JSX

- 문자도 HTML도 아닌 JS의 확장 문법(HTML과 JS의 섞임)

```
const rootElement = document.getElementById("root");

// 방법 1
const element = React.createElement("h1", {
  className: "title",
  children: ["Hello, World", "It's me"]
})

// 방법 2
const element = <h1 className="title">Hello, world!</h1>;

// 방법 3
const text = "Hello, world!";
const titleClassName = "title";
const element = <h1 className={titleClassName}>{text}</h1>;

// 방법 4
const props = { className: titleClassName, children: text };
const element = <h1 {...props} />;

ReactDOM.render(element, rootElement);
```

2. Babel

- JS trans-compiler
  - 컴파일러: 언어해석기, 특정 언어를 다른 프로그래밍 언어로 옮기는 프로그램
- 즉, React에서 작성한 코드가 JS에서 해석할 수 있게 하기 위해 사용
- `<script type="text/babel">`을 넣어서 사용 가능하다

## 멀티 element 생성

- `<></>`=`React.Fragment`를 알아보자

```
// 쓸 때 없이 div가 생긴다.
<div
  children={[
    React.createElement("h1", null, "hi");
    React.createElement("h2", null, "hi");
    React.createElement("h3", null, "hi");
  ]}
/>

// 그것을 방지, div가 잡히지 않고 root의 자식이 된다.
<React.Fragment
  children={[<h1>hi</h1><h2>hii</h2>]}
/>

<React.Fragment>
  {<h1>h11</h1><h2>h22</h2>}
</React.Fragment>

<>
  {<h1>h11</h1><h2>h22</h2>}
</>
```

## Element 찍어내기

- Function으로 재사용 가능한 JSX Element를 만들 수 있다.
- Custom Element는 항상 Uppercase로 만들어야한다.
- Element 안에 children은 수는 제한이 없다.

```
const Paint = ({title, description, children}) => {
  return (
    <>
      <h1>{title}</h1>
      <h2>{description}</h2>
      {children}
    </>
  )
}

const element = (
  <>
    <Paint title="hello" description="greeting">
      <h1>Hi</h1>
    </Paint>
  </>
)
```

## JS와 JSX 섞어 쓰기

- Custome Element안에 JS코드를 넣어서 활용 할 수 있다. (interpolation: 안에 삽입하는 어구)
  (HTML 또한 안에 `<script>`를 통해 JS를 사용하기 때문에 마찬가지다.)

```
const Text = ({text}) => {
  if (text.charAt(0) === text.charAt(0).upperCase()) {
    return <h1>{text}</h1>;
  } else {
    return <h3>{text}</h3>;
  }
}

function Number({number, selected}) {
  return selected ? <h1>{number}</h1> : <h3>{number}</h3>;
}

const element = (
  <>
    <Text text="Text" />
    <Text text="text" />

    {[1,2,3,4,5].map(number => (<Number number={number} selected={number === 3} />))}
  </>
)
```

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

## 이벤트

- VanillaJS
  - `on{event} / addEventListener`
    - ex. `onclick`
- React
  - `on{Event}`
    - ex. `onClick`

```
const handleClick = () => alert('pressed');
<button onClick={handleClick}>
```

### 검색창

- React 객체는 immutable이기 때문에 `Object.assign()`을 통해 객체 자체 속성을 복사하여 변경을 한 후 다시 객체를 return하는 방법을 사용
- `setState()`라는 함수를 만들어서 상태가 변경 되도록 만든다.
- `ReactDOM.render()`를 변경이 있을 때마다 실행하여 전역 변수를 변경하는 방식이다.

```
const state = { keyword: "", typing: false, result: "" };

const App = () => {
  function handleChange(e) {
    setState({ typing: true, keyword: event.target.value });
  }

  function handleClick() {
    setState({
      typing: false,
      result: `We find result of ${state.keyword}`
    });
  }

  return (
    <>
      <input onChange={handleChange} />
      <button onClick={handleClick}>search</button>
      <p>
        {state.typing ? `Looking for ${state.keyword}...` : state.result}
      </p>
    </>
  )
}

function setState(newState) {
  Object.assign(state, newState);
  render();
}

function render(){
  ReactDOM.render(<App />, rootElement)
}
```

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

'사이드 이펙트 = 부작용'의 의미이지만 부정적인 의미가 아니라 부수 효과 정도로 볼 수 있다.

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

## 정리 (주의 할 점)

- **React에서 Component는 항상 대문자(uppercase)로 만들어야한다. 왜냐하면 HTML의 태그명과 겹치지 않게 하기 위한 규칙이다.**
- re-flow, paiting을 조사
