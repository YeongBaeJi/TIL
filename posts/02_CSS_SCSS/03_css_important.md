# 중요한 CSS 지식

## 꼭 기억해야할 정보

1. inline요소에 `width`, `height` 속성을 적용시키고 싶다면 `display: block`또는 `display: inline-block`을 적용한다.

2. 글자/문자 관련 속성들을 부모에 적용시키면 자식에서 상속받는다. (단, 모든 글자/문자 관련 속성은 아니다. ex. `color`, `font-size`)

3. inline(인라인)요소

- 컨텐츠 크기만큼 `width`, `height`가 적용되고 `auto`로 값이 설정되어 있다.

4. block(블록)요소

- 기본값으로 `width: auto`, `height:auto`가 적용되어 있지만 부모의 `width` 만큼 `width`가 적용된다
- 컨텐츠 크기에 따라 `height`가 설정된다.

5. 브라우저는 기본적으로 `font-size: 16px`이 적용된다

## 하지 말았으면 하는 행동

1. 인라인스타일/`!important` 적용은 가능하면 피한다.

- 스타일을 변경 시 우선수위 때문에 적용하기 어렵다.

## 요소를 가운데 정렬 하는 법

1. `margin: 0 auto`

- block 요소일 경우 auto를 통해 해결한다.
