# CSS properties

## 너비 (width/height)

1. `width`, `height`

- 요소의 가로/세로 너비
- 기본: `auto`
- 단위 설정: pm, em 등 지정

2. `max-width`, `max-height`

- 요소가 커질 수 있는 최대 가로/세로 너비
- 기본: `none`
- 단위: pm, em 등 지정

3. `min-width`, `min-height`

- 요소가 작아질 수 있는 최소 가로/세로 너비
- 기본: `0`
- 단위: px,em 등 지정

## 단위

1. `px`: 픽셀
2. `%`: 상대적 백분율
3. `em`: 요소의 글꼴 크기 또는 부모 요소의 글꼴 크기(`font-size`)
4. `rem`: 루트 요소(html)의 글꼴 크기 (`html{font-size: 지정}`)
5. `vw`: 뷰포트 가로 너비의 백분율
6. `vh`: 뷰포트 세로 너비의 백분율

## Box-model (박스모델)

1. `margin`

- 요소의 외부 여백(공간)을 지정하는 단축 속성
- 기본: `0`
- 단위: px, em, vw 등 단위로 지정
- `auto`로 브라우저가 여백을 계산

2. `padding`

- 요소의 내부 여백(공간)을 지정하는 단축 속성
- 기본: `0`
- 단위: px, em, vw 등
- %: 부모 요소의 가로 너비에 대한 비율로 지정

3. `border`

- 요소의 테두리 선을 지정하는 단축 속성
- `border: border-width border-style border-color;`
- 기본: `medium`
- 단위: px, em. % 등

4. `border-radius`

- 요소의 모서리를 둥글게 깎음
- 기본: `0`
- 단위: px, em, vw 등

5. `box-sizing`

- 요소의 크기 계산 기준을 지정
- 기본: `content-box`
  - content 영역으로 크기 계산
- 추가: `border-box`
  - padding+border 영역으로 크기 계산
  - **`box-sizing: border-box` 설정 시 `width`, `height`값에 `padding`, `border`도 포함 된다**

## 보여지는 것을 제어하는 속성

1. `overflow`

- 요소의 크기 이상으로 내용이 넘쳤을 때, 보여짐을 제어하는 단축 속성
- 기본: `visible`
  - 넘친 내용 그대로 보여줌
- `hidden`
  - 넘친 내용을 잘라냄
- `scroll`
  - 넘친 내용을 잘라냄, 스크롤바 생성
- `auto`
  - 넘친 내용이 있는 경우에만 잘라내고 스크롤바 생성
- **자식의 영역이 넘쳤으면 '부모'에 `overflow`를 적용한다**

2. `display`

- 요소의 화면 출력(보여짐) 특성
- `block`
  - 상자(레이아웃) 요소
- `inline`
  - 글자요소
- `inline-block`
  - 글자+상자 요소
- `flex`
  - 플렉스 박스(1차원 레이아웃)
- `grid`
  - 그리드 (2차원 레이아웃)
- `none`
  - 보여짐 특성 없음, **화면에서 사라짐**
- 기타
  - `table`, `table-row`, `table-cell` 등
- **`<a>`는 `inline`요소인데 `display: block`으로 처리하여 작업 가능하다**

## 색상 표현

색을 사용하는 모든 속성에 적용 가능한 색상 표현

1. 색상 이름

- 브라우저에서 제공하는 색상 이름
- red, tomato, royalblue

2. Hex 색상코드

- 16진수 색상(Hexadecimal Colors)
- #000, #FFFFFF

3. RGB

- 빛의 삼원색
- rgb(255, 255, 255)

4. RGBA

- 빛의 삼원색 + 투명도
- rgba(0,0,0,.5)

5. HSL

- 색상, 채도, 명도
- hsl(120, 100%, 50%)

6. hsla

- 색상, 채도, 명도 + 투명도
- hsla(120, 100%, 50%, 0.3)

## 글꼴 / 문자

1. `font-style`
2. `font-weight`
3. `font-size`
4. `line-height`: 한 줄의 높이, 행간과 유사

- **`line-height: 2`라면 `font-size`의 배수를 의미한다.**
- `line-height: 32px`, `line-height: 200%`로 나타낼 수 있지만 배수를 추천
- **예전에 `font-size`와 `line-height`를 이용해서 가운데 정렬을 많이 했었지만 지금은 `flex`로 처리한다**

5. `font-family`

- `body`에만 적용해도 자식에서 상속 받을 수 있다.
- 값:
  - `serif`: 바탕체 계열
  - `sans-serif`: 고딕체 계열
  - `monospace`: 고정너비(가로폭이 동등)글꼴 계열
  - `cursive`: 필기체 계열
  - `fantasy`: 장식 글꼴 계열

6. `color`

- 기본: `rgb(0,0,0)`

7. `text-align`

- 문자의 정렬 방식
- 기본: `left`

8. `text-decoration`

- 문자의 장식 선

9. `text-indent`

- 문자 첫 줄의 들여쓰기
- 음수(-) 사용 가능

## 배경

1. `background-color`

- 색깔

2. `background-image: url()`

- 이미지 주소

3. `background-repeat: no-repeat`

- 이미지 반복여부

4. `background-position: top right`;

- 이미지의 위치

5. `background-size: cover`

- `cover`: 이미지가 요소에 전체 사이즈
- `contain`: 이미지 원본 크기가 모두 나오게 포함

6. `background-attachments`

- 요소의 배경 이미지 스크롤 특성
- `scroll`
  - 이미지가 요소를 따라서 같이 스크롤
- `fixed`
  - 이미지가 뷰포트에 고정, 스크롤 X
- `local`
  - 요소 내 스크롤 시 이미지가 같이 스크롤

## 배치

1. `position`

- 기본: `static`
- `relative`: 요소 자신을 기준
- `absolute`: 위치 상 부모 요소를 기준
- `fixed`: 뷰포트(브라우저)를 기준
- `sticky`: 스크롤 영역 기준

2. `position`을 통한 배치

- 자식요소에서 `position: absolute;` 적용
  - 부모 요소에`position: relative;`를 통해 상대적인 부모 위치를 조정할 수 있다.
  - **`position: relative` 자체로 배치를 하는 일은 거의 없다. `absolute`와 다르게 공간을 그대로 놔두고 움직이기 때문에 애매한 경우가 생긴다. 보통 기준이 되는 부모 요소가 필요한 경우가 대부분**
  - `absolute`가 부모 요소를 찾지 못하면 `body`, `html`, `viewport`까지 올라가서 찾는다.
  - **`absolute`의 부모 요소에 `fixed`, `absolute`를 넣을 수도 있지만 보통 흐름이 무너져서 넣지 않는다.** (단, 예외 상황들은 생긴다)
  - **`position: absolute, fixed`가 지정되면 `display: bloack`으로 변경된다.**

3. `z-index`

- 요소의 쌓임 정도를 지정
- 기본: `auto` (부모 요소와 동일한 쌓임 정도)

### 요소 쌓임 순서(Stack order)

1. 요소에 position 속성 값이 있는 경우 쌓임(`static` 제외)
2. 1번 조건이 같은 경우, `z-index` 속성의 숫자가 값이 높을 수록 위에 쌓임
3. 1,2번 조건까지 같은 경우, HTML의 다음 구조일 수록 위에 쌓임
4. 아래에 경우 화면에 가장 위로 올라온 순서는

- item-2 > item-3 > item-1 > container 순으로 container가 가장 바닥에 있다.

```
.container { position: relative; }
.container .item-1 { position: static; z-index: 999; }
.container .item-2 { position: absolute; z-index:1; }
.container .item-3 { position: absolute; }
```

## 자주 사용하는 패턴

1. 버튼 만들기

```

a {
display: block;
width: 200px;
height: 100px;
background-color: orange;
font-size: 22px;
color: white;
text-decoration: none;
text-align: center;
line-height: 100px;
}

```

2. 이미지 배경 맞추기

- `background-size`를 `width`값과 동일하게 하여 이미지를 맞춘다.

```

div.logo {
width: 200px;
height: 200px;
background-image: url();
background-size: 200px;
background-repeat: no-repeat;
bakcgound-position: center;
}

```

## 플렉스 (정렬)

## 전환

## 변환

## 띄움

## 애니메이션

## 그리드

## 다단

## 필터

```

```
