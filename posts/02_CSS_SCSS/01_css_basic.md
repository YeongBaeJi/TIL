# CSS basic

## 기본 형태

`선택자 {속성: 값;}`

## 선언 방식

1. 내장방식

- `<head>`안에 `<style>`을 선언. 권장하지 않는다.

2. 인라인방식

- 요소에 style속성을 직접 추가하는 방식

3. link방식

- `<link rel="stylesheet" href="">`
- 권장방식.
- 병렬로 연결

4. `@import url("./test.css")`

- CSS에서 연결하는 방식
- 직렬로 연결(link로 연결된 css를 거쳐야 하기 때문에 속도에 대한 부분을 고려하여 사용)

## 복합 선택자 (중요!)

1. 일치 선택자

- `span.orange {}`
- 동시에 만족하는 요소를 위해서 사용

2. 자식 선택자

- `ul > .orange {}`
- 클래스 orange를 찾고 부모가 ul인 것을 찾는다.

3. 하위 선택자

- `div .orange {}`
- 클래스 orange를 찾고 상위에 div가 있는지 찾는다.

4. 인접 형제 선택자

- `.orange + li {}`
- 클래스 orange를 찾고 다음 형제 요소 li 1개만 찾는다.

5. 일반 형제 선택자

- `.orange ~ li {}`
- 클래스 orange를 찾고 다음 형제 요소 li를 모두 찾는다

## 가상 클래스

1. `:hover`

- 마우스 커서가 '올라가' 있는 동안 선택

2. `:active`

- 마우스를 '클릭'하고 있는 동안 선택

3. `:focus`

- 포커스가 되면 선택.
- focus될 수있는 요소는 HTML대화형 컨텐츠만 가능
- `<input>`, `<a>`, `<button>`, `<label>`, `<select>` 등
- `<div tabindex="-1">`는 대화형이 아니지만 `tabindex` 속성을 통해서 가능해진다
- [MDN](https://developer.mozilla.org/ko/docs/Web/Guide/HTML/Content_categories)

4. `:first-child`

- 형제 요소 중 첫째라면 선택

5. `:last-child`

- 형제 요소 중 막내라면 선택

6. `nth-child(n)`

- 형제 요소 중 (n)번째라면 선택
- 짝수 선택 시: `nth-child(2n)`
- 홀수 선택 시: `nth-child(2n+1)`
- 두번째 이후부터 선택 시: `nth-child(n+2)`

7. `:not()`

- 해당 요소가 아닌 요소 선택

## 가상 요소

1. `::before {content: '앞'}`

- 내부 앞에 content를 삽입

2. `::after {content: '뒤'}`

- 내부 뒤에 content를 삽입

## 속성 선택자

기본형태: `[원하는 속성] {}`

1. `[type] {}`

- 속성 `type`을 포함한 요소 선택

2. `[type="password"] {}`

- 속성 `type`에서 `password`값을 포함한 요소 선택

## 스타일 상속 (중요!)

1. 부모에 적용한 스타일이 자식에게도 상속이 된다.
2. 상속되는 CSS 속성들

- 글자/문자 관련 속성들 (단, 모든 글자/문자 속성은 아님)
- `font-style`, `font-weight`, `font-size`, `line-height`, `font-family`, `color`, `text-align` 등...

```
<div class="animal">
  <div class="tiger">호랑이</div>
  <div class="lion">사자</div>
  <div class="elephant">코끼리</div>
</div>

.animal {color: red}
```

### 강제 상속

스타일 상속이 되지 않는 속성일 경우
강제 상속할 수 있다.

- 부모가 `height: 200px`일 때 자식에서 `height: inherit`로 상속 받을 수 있다.

## 선택자 우선 순위 (중요!)

1. `!important`: 9999999999
2. `style=`(인라인선언): 1000
3. `#id`(아이디): 100
4. `.class`,`:hover`(클래스): 10
5. `div`,`::before`(태그): 1
6. `*`: 0
7. `body`: 점수 X
   (`body`에 속성을 적용하면 하위 자식들이 상속받아 적용되고 **상속받는 것들은 점수가 없다**)
8. `:not()`: 부정선택자는 점수 계산 안하지만 `()`안에 선택자에 따라 점수가 결정된다.
