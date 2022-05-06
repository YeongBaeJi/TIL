# React

## Component

- Component는 `<TestComponent />`와 같은 형식이다. 이유는 그 컴포넌트 안을 출력해주는 용도라서 닫기태그가 필요없다.
- 왜? 대문자로 파일명을 짓는가?
  - HTML태그와 겹치지 않게하지 위한 규칙이다.

## library VS Framework

- 라이브러리는 개발 편의를 위한 '도구의 모음'
- 프레임워크는 '기반 구조까지' 잡혀있음
- 라이브러리는 공구
- 프레임워크는 공장

## React의 장점

인기가 많다고 기술적 근간이 좋은 것은 아니지만 리액트는 기술적으로 장점이 많다

- Virtual DOM
- JSX
- Flux
- Functional Programming

리액트를 풍성하게 해주는 라이브러리들이 많이 나오고 있다. (swr, framer motion 등..)

## DOM 다루기 Element 생성

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
