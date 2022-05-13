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

