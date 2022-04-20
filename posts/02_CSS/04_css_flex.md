# Flex

`display: flex`만 넣어도 '수평 정렬'을 쉽게 할 수 있다.

## Flex의 특징

1. `display: flex`를 하면 해당 요소는 'Flex Container'가 되고 자식 요소는 'Flex Items'가 된다

## Flex Properties (속성)

### Flex Container

1. `display: flex`

- `flex`: block요소와 같이 정의
- `inline-flex`: inline요소와 같이 정의

2. `flex-direction`

- 'Cross-axis(교차축, Y축)': 수직 개념
- 'Main-axis(주축, X축)': 수평 개념
- `row`: 행 축 (좌>우)
- `row-reverse`: 행 축 (우>좌)
- `column`: 열 축 (위>아래)
- `column-reverse`: 열 축 (아래>위)

3. `flex-wrap`

- `nowrap`: 묶음(줄 바꿈)없음
- `wrap`: 여러 줄로 묶음
- `wrap-reverse`: wrap의 반대 방향을 묶음

4. `justify-content` (많이 사용)

- '주 축'의 정렬 방법
- '수평 정렬'을 위해
- `flex-start`
- `flex-end`
- `center`
- `space-between`
- `space-arrowd`

5. `align-content`

- 교차 축의 '여러 줄' 정렬 방법
- '수직 정렬'을 위해
- (`flex-wrap`이 적용되어 있어야 적용가능, 활용도가 낮다)
- `stretch`
- `flex-start`
- `flex-end`
- `center`
- `space-between`
- `space-around`

6. `align-items` (많이 사용)

- 교차 축의 '한 줄' 정렬 방법
- `stretch`
- `flex-start`
- `flex-end`
- `center`

7. `flex-flow`

- `flex-flow` = `flex-direction`+`flex-wrap`

### Flex Items

1. `order`

- item의 순서
- 기본: `0`
- 숫자 작을 수록 먼저

2. `flex-grow`

- item의 증가 너비 비율
- 기본: `0`
- 숫자 증가 비율

3. `flex-shrink`

- item의 감소 너비 비율
- 기본: `1`
- container 너비에 따라 감소 비율 적용
- 숫자 감소 비율
- container크기에 따라 자식요소들의 사이즈가 줄어드는데 그대로 유지하고 싶으면 `flex-shrink: 0;`을 사용한다

4. `flex-basis`

- item의 공간 배분 전 기본 너비
- 기본: auto
- 요소의 content 너비
- 단위: px, em, rem 등 단위
- `flex-grow`로 요소 3개를 1:1:2로 설정해도 그 안에 들어있는 text또는 content 내용들의 사이즈가 달라서 비율이 정확하지 않다. 그래서 `flex-basis:0`을 통해 무시하고 `flex-grow` 비율 그대로 적용되게 할 수 있다.

5. `align-self`
