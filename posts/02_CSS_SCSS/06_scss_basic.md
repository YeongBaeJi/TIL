# SCSS / SASS ?

### 참고 자료

- [공식](https://sass-lang.com/)
- [SassMeister](https://www.sassmeister.com/)

CSS Preprocessor (전처리기)

1. 컴퓨터에서 SCSS or SASS 문법으로 스타일을 작성한 후
2. 브라우저에서 동작할 수 있게 CSS 파일로 컴파일하여 동작하게 한다.

### 기본 문법

```
.container {
  h1 {
    color: tomato;

    // 주석 2가지 방법
    // background-color: red;
    /* font-size: 10px */
  }
}
```

### 중첩

```
.container {
  ul {
    li {
      .name {}
      .age {}
    }
  }
}

.container {
 > ul {
    li {
      .name {}
      .age {}
    }
  }
}
```

### 상위(부모) 선택자 참조

```
.btn {
  position: absolute;
  &.active {
    color: red;
  }
}

.list {
  li {
    &:last-child {

    }
  }
}

.fs {
  &-small {font-size: 11px;}
  &-medium {font-size: 21px;}
  &-large {font-size: 31px;}
}
```

### 중첩된 속성

'-'(네임스페이스)가 동일한 속성들에게 적용 할 수 있다.

```
.box {
  font: {
    weight: bold;
    size: 10px;
    family: sans-serif;
  };
  margin: {
    top: 10px;
    left: 20px;
  };
  padding: {
    top: 10px;
    bottom: 40px;
    left: 10px;
    right: 20px;
  };
}
```

### 변수

`{}` 범위를 고려하여 변수를 설정하자.

```
// global variable
$size: 100px;

.container {
  // local variable
  $size: 200px;

  position: fixed;
  top: $size;
  .item {
    width: $size;
    transform: translate($size);
  }
}
```

### 산술 연산

특별히, 나누기(`/`)는 3가지 방법으로 적용할 수 있다.

- `()`
- 변수로 대체하여 사용.
- 다른 연산자 같이 사용.

```
div {
  width: 20px + 20px;
  height: 40px - 10px;
  font-size: 10px * 2;
  margin: (30px / 2);
  margin: $size / 2;
  margin: (10px + 10px) / 2;
  padding: 20px % 7;
}
```

동일한 연산자를 사용해야하지만 예외가 있다. (`calc()`)

```
.box {
  width: calc(100% - 200px);
}
```

### Mixins (재활용)

자주 사용하는 코드 `@mixin`을 통해 만들어 두고 `@include`로 사용 가능하다.

```
@mixin center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  @include center;
  .item {
    @include center;
  }
}
```

parameter를 사용할 수도 있다.

```
@mixin box($size: 100px, $color: tomato) {
  width: $size;
  height: $size;
  background-color: $color;
}

.container {
  @include box(200px, red);
  .item {
    @include box($color: green);
  }
}
.box {
  @include box;
}
```

### 반복문 (@for)

```
// JS
for (let i=0; i<10; i++) {

}

// SCSS
@for $i from 1 through 10 {
  .box:nth-child(#{$i}) {
    width: 100px;
  }
}
```

### 함수

`@mixin`은 단순히 코드 재사용이고 `@function`을 기능을 가지고 있으며 재사용 가능하다.

```
@mixin center {
  display: flex;
  justify-content: center;
  align-items: center;
}

@function ratio($size, $radio) {
  @return $size * $ratio
}

.box {
  $width: 160px;
  width: $width;
  height: ratio($width, 1/2);
  @include center;
}
```

### 색상 내장 함수

SCSS에 내장되어 있는 함수

1. `mix($color, red)`: 기존에 있는 컬러와 새로운 컬러를 mix한다
2. `lighten($color, 10%)`: 10% 더 밝게
3. `darken($color, 10%)`: 10% 더 어둡게
4. `saturate($color, 10%)`:채도 올려준다.
5. `desaturate($color, 10%)`: 채도 낮춰준다.
6. `grayscale($color)`: 회색으로 만들어 준다
7. `invert($color)`: 색상 반전
8. `rgba($color, .5)`: 색상 투명도

```
.box {
  $color: blue;
  ...

  &:hover {
    background-color: darken($color, 10%);
  }
}
```

### 가져오기

SCSS에서 더 간결하게 사용 할 수 있다.

- CSS

  - `@import url("./sub.scss");`

- SCSS

  - `@import "./sub.scss";`
  - `@import "./sub";`
  - `@import "./sub", "./sub2";`

### 데이터 종류

1. `$number`: 1;
2. `$string`: bold;
3. `$color`: red;
4. `$boolean`: true;
5. `$null`: null;
6. `$list`: orange, blue, yellow;(JS array와 유사)
7. `$map`: (
   o: orange,
   b: blue,
   y: yellow
   )`
   (JS object와 유사)

```
.box {
  width: 100px;
  color: $color;

  // null 사용시 CSS에서 나타나지 않는다.
  position: null;
}
```

### 반복문 (@each)

1. `@each`에 `$list`를 적용

```
$list: orange, blue, yellow;

// $list에 있는 것을 $c라는 변수에 담아 사용
@each $c in $list {
  .box {
    color: $c;
  }
}
```

2. `@each`에 `$map`을 적용

```
$map: (
o: orange,
b: blue,
y: yellow
);

// $map에 있는 것을 $key, $value

@each $key, $value in $map {
  .box-#{$key} {
    color: $value;
  }
}
```

### 재활용 (@content)

기존 `@mixin`형태에서 `@content`를 사용하여 속성을 더 추가 시킬 수 있다. (`@include`안에서 적용)

```
@mixin left-top {
  position: absolute;
  top: 0;
  left: 0;
  @content;
}
.container {
  width: 100px;
  height: 100px;
  @include left-top;
}
.box {
  width: 200px;
  height: 300px;

  // @content에 이부분이 추가로 삽입된다.
  @include left-top {
    bottom: 0;
    right: 0;
    margin: auto;
  }
}
```
