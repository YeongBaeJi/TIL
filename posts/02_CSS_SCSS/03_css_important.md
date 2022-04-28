# 중요한 CSS 지식

## Inline, Block Element 특징

1. inline요소에 `width`, `height` 속성을 적용시키고 싶다면 `display: block`또는 `display: inline-block`을 적용한다.

2. **글자/문자 관련 속성들을 부모에 적용시키면 자식에서 상속받는다. (단, 모든 글자/문자 관련 속성은 아니다. ex. `color`, `font-size`)**

3. inline(인라인)요소

- 컨텐츠 크기만큼 `width`, `height`가 적용되고 `auto`로 값이 설정되어 있다.

4. block(블록)요소

- 기본값으로 `width: auto`, `height:auto`가 적용되어 있지만 부모의 `width` 만큼 `width`가 적용된다
- 컨텐츠 크기에 따라 `height`가 설정된다.

5. 브라우저는 기본적으로 `font-size: 16px`이 적용된다

### Inline요소가 Block요소로 바뀌는 경우

1. `float`속성을 적용시키는 경우
2. `position`속성을 적용시키는 경우

## 추천하는 CSS 작성 관습

1. 인라인스타일/`!important` 적용은 가능하면 피한다.

- 스타일을 변경 시 우선수위 때문에 적용하기 어렵다.

https://code.tutsplus.com/tutorials/30-css-best-practices-for-beginners--net-6741
https://www.freecodecamp.org/news/7-important-tips-for-writing-better-css/
https://www.creativebloq.com/advice/a-guide-to-writing-better-css

## 요소를 가운데 정렬 하는 법

1. `margin: 0 auto`

- block 요소일 경우 auto를 통해 해결한다.

## Image 요소의 특징

1. `<img />` 요소 '아래 공간'이 생기는 이유?

- `<img />`는 'inline' 요소이기 때문에 'baseline'을 기준으로 위치한다. 그래서 아래 공간이 생긴다.

2. `<img />` 요소가 `display: block; margin: 0 auto;`인 경우, `width`속성 없이도 가운데 정렬이 가능하다.

## Position의 특징

1. 자식요소에 `position: absolute;`와 `top: 0;`, `bottom: 0;`, `left: 0;`, `right: 0`적용 됐을 때 부모에 `position`(static을 제외)
