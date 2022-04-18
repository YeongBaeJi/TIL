# HTML 기초 개념

## DOCTYPE 이란?

1. 문서의 HTML 버전을 지정
2. DOCTYPE(DTD, Document Type Definition)
3. 마크업 언어에서 문서 형식을 정의
4. 웹 브라우저가 어떤 HTML 버전의 해석 방식으로 페이지를 이해하면 되는지를 알려주는 용도
5. 만약에 `<!DOCTYPE html>` 안쓰면 브라우저가 쿽스모드로 작동한다. (ex.border 적용시 block요소 무시하고 그냥 전체크기로 적용되는 오류가 생김)

### 버전

1. HTML5: `<!DOCTYPE html>`
2. XHTML: `<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN">`

## 요소 의미

1. `<html>`

- 문서의 '전체' 범위
- HTML 문서가 어디에서 시작하고, 어디에서 끝나는지 알려준느 역할

2. `<head>`

- 문서의'정보'를 나타내는 범위
- 웹 브라우저가 해석해야 할 웹 페이지의 제목, 설명, 사용할 파일 위치, 스타일 같은, 웹페이지의 보이지 않는 정보를 작성하는 범위.

3. `<body>`

- 문서의 '구조'를 나타내는 범위
- 사용자 화면을 통해 보여지는 logo, header, footer, navigation, menu, button, image 같은 웹페이지의 보여지는 구조를 작성하는 범위.

4. `<title>`

- 문서의 제목을 정의
- 브라우저 탭에서 볼 수 있다.

5. `<link rel="stylesheet" href="">`

- `rel`
  - Relationship의 약자로 현재 HTML과 어떤 관계인지를 명시하는 속성(attribute)
  - 필수속성! 가져올 문서와 관계, 대부분 CSS파일 가져오지만 icon을 연결 시킬 수도 있다.
- `href`
  - Hyper Text Reference로 브라우저가 참조할 특정 경로(Path)를 지정하는 속성(attribute)
  - 가져올 문서의 경로

6. `<style>`

- 스타일(CSS)를 HTML 문서 안에 작성하는 경우에 사용.

7. `<script src="./main.js">`

- `src`
  - source라는 의미로 사용할 소스코드를 지정하는 속성
  - JS파일을 가져오는 경우 사용

8. `<meta charset="UTF-8" />`

- meta는 HTML 문서의 제작자, 내용, 키워드 같은 여러 정보를 검색엔진이나 브라우저에게 제공
- 문자인코딩 방식
- Character Set
- 대표적 한글 사용에서는 `EUC-KR` 또는 `UTF-8` 등이 사용, 웹에서는 `UTF-8` 권장

9. `<meta name="author" content="youngcodej22" />`

- 저자 정보
- `name`
  - 정보의 종류 중 이름
- `content`
  - 정보의 값

10. `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`

- viewport 설정
- 여기서 viewport는 모바일 디바이스를 말하고 해당 디바이스에 따라 확대/축소 여부나 정보를 어떻게 할지에 대한 정보를 명시하는 것이다.

```
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Documnet</title>

  // head는 정보를 담당하는 때문에 style을 여기서 연결한다
  <link rel="stylesheet" href="">
</head>
</html>
```

## 기본 문법

1. 기본 형태

- `<태그>내용</태그>`
- 이 형태를 요소(Element)라고 한다.

2. 부모요소 / 자식요소

```
<부모요소태그>
  <자식요소태그>내용</자식요소태그>
</부모요소태그>
```

3. 상위(조상)요소 / 하위(후손)요소

```
// 해당요소 기준에서 조상요소
<조상요소태그>
  <부모요소태그>
    <해당요소태그></해당요소태그>
  </부모요소태그>
</조상요소태그>

// 해당요소 기준에서 후손요소
<해당요소태그>
  <자식요소태그>
    <후손요소태그></후손요소태그>
  </자식요소태그>
</해당요소태그>
```

4. 빈요소태그

- `<태그 />`

5. 속성 / 값

- `<태그 속성="값">내용</태그>`

## 인라인(inline) / 블록(block)

요소가 화면에 출력되는 특성.

1. 인라인(inline)요소

- 글자를 만들기 위한 요소들
- **줄바꿈할 때 '띄어쓰기'가 생긴다.**
- **가로,세로 길이가 포함한 콘텐츠 크기만큼 자동으로 줄어든다.**
- `<span style=""></span>`
  - 인라인 속성 지정
  - **글자는 가로, 세로 사이즈를 가질 수 없어서 `width`, `height`를 적용 할 수 없다.**
  - **위, 아래 `margin`, `padding` 적용 X**
  - **좌, 우 `margin`, `padding` 적용 O**
  - **자식요소로 블록요소 넣을 수 없다!**(단, 인라인요소는 넣을 수 있다.)
    - `<span><div></div></span>`

2. 블록(block)요소

- 상자(레이아웃)을 만들기 위한 요소들.
- 블록요소들은 수직으로 쌓인다.
- 가로는 부모요소의 크기만큼 자동으로 늘어난다.
- 세로는 포함한 컨텐츠의 크기만큼 자동으로 줄어든다.
- `width`, `height`를 적용 시킬 수 있다.
- 상,하,좌,우 모두 `margin`, `padding`을 적용 시킬 수 있다.
- 자식요소로 블록, 인라인요소 모두 가능하다.
