주차:  1 주차 (4/11~4/15)
학습범위: WEB 개요

# 웹 개요

## 웹앱의 동작원리 순서

1. 주소 입력
2. 사용자 컴퓨터(브라우저) > Request > 서버
3. 서버 > Response(최초응답 HTML 파일) > 브라우저
4. 브라우저 > Request(추가요청) > 서버
5. 서버 > Response(추가응답) > 브라우저

## 웹 표준

웹 표준(Web Standard)란 '웹에서 사용되는 표준 기술이나 규칙'을 의미
W3C의 표준화 제정 단계의 '권고안(REC)'에 해당하는 기술.

### 표준화 제정 4단계

1. 초안 (Working Draft, WD)
2. 후보권고안 (Candidate Recommendation, CR)
3. 제안권고안 (Proposed Recommendation, PR)
4. 권고안(W3C Recommendation, REC)

### 크로스 브라우징

조금은 다르게 구동되는 여러 브라우저에서, 동일한 사용자 경험을 줄 수 있도록 제작하는 기술, 방법.

#### 브라우저 공급업체(Browser Vendors)

- 크롬
- 엣지
- 파이어폭스
- 오페라
- 스윙
- 웨일
- IE (2020년 8월 MS는 IE종료 발표)
- 사파리

## 브라우저 인터페이스

1. 창(Window): 브라우저 전체, 탭(tab)포함
2. 탭(tab): 상단 표시줄에 탭
3. 주소창(address bar)
4. 뷰포트(viewport): 창에서 주소창+탭을 제외한 나머지 부분

- 렌더링이란 브라우저의 뷰포트에 웹사이트를 출력하는 행위를 말한다.

## 웹 이미지

### 용어

1. 래스터(Raster): 픽셀이 모여 만들어진 정보의 집합, 레스터 이미지(ex. .jpeg, .gif, .png)
2. 벡터(Vector): 점, 선, 면의 위치(좌표), 색상 등 수학적 정보의 형태로 이루어진 이미지. 확대/축소에서 자유로움, 용량 변화가 없음. 정교한 이미지(인물, 풍경 사진 같은)를 표현하기 어려움.(ex. icon)
3. 비트맵: 정교하고 다양한 색상을 자연스럽게 표현. 확대/축소 시 계단 현상, 품질 저하(래스터 이미지)

### 이미지 종류

1. JPG (JPEG)

- Joint Photographic coding Experts Group
- Full-color와 Gray-scale의 압축을 위해 만들어졌다.
- 압축률이 훌륭해 '사진', '예술'분야에서 많이 사용.
- 표현 색상도
  - 24비트, 약 1600만 색상이 뛰어남
  - 이미지의 품질과 용량을 쉽게 조절 가능
  - 가장 널리 쓰이는 이미지 포맷
- 손실 압축을 하기 때문에 반복 저장은 주의하자

2. PNG (Portable Network Graphics)

- GIF의 대체 포맷으로 개발
- 비손실 압축
- 8비트(256색상)
- 24비트(약 1600만 색상)
- Alpha Channel 지원(투명도)
- W3C 권장 포맷
- JPG보다 용량이 좀 더 크다
- JPG는 투명도 지원이 안되니 PNG를 사용하면 된다.

3. GIF (Graphics Interchange Format)

- 이미지 파일 내에 이미지 및 문자열 같은 정보들을 저장
- 비손실 압축
- 여러 장의 이미지를 한 개의 파일에 담을 수 있다 (움짤, 애니메이션)
- 8비트(256) 색상만 지원 (다양한 색상 표현에는 적합하지 않음)

4. WEBP

- JPG, PNG, GIF를 모두 대체할 수 있는 구글이 개발한 이미지 포맷
- 완벽한 손실/비손실 압축 지원
- GIF 같은 애니메이션 지원
- Alpha Channel 지원(손실, 비손실 모두)
- IE에서는 지원 불가

5. SVG (Scalable Vector Graphics)
   - 마크업언어(HTML/XML) 기반의 벡터 그래픽을 표현하는 포맷
   - 해상도의 영향에서 자유로움
   - CSS와 JS로 제어 가능
   - 파일 및 코드 삽입 가능
   - 복잡한 코드를 css/js로 디테일하게 제어하기는 매우 어려워서 색상이나 일부 영역의 추가/제거 혹은 간단한 형태 생성 정도로 가볍게 사용

## 웹에 관련된 특수기호

1. backtick, grave: `\``
2. tilde: `~`
3. exclamation mark: `!`
4. at sign: `@`
5. sharp, number sign: `#`
6. dollar sign: `$`
7. percent sign: `%`
8. caret: `^`
9. ampersand: `&`
10. asterisk: `*`
11. hyphen, dash: `-`
12. underscore, low dash: `_`
13. equal sign: `=`
14. quotation mark: `"`
15. apostrophe: `'`
16. colon: `:`
17. semicolon: `;`
18. comma: `,`
19. period, dot: `.`
20. question mark: `?`
21. slash: `/`
22. vertical bar: `|`
23. backslash: `\`
24. parenthesis: `()`
25. brace: `{}`
26. bracket: `[]`
27. angle bracket: `<>`

## 오픈 소스 라이선스

어떤 제품을 개발하는 과정에 필요한 소스코드나 설계도(저작권)를 누구나 접근해서 열람할 수 있도록 공개하는 것.
결국 프로젝트를 만들 때 이 라이선스들을 사용한다면 꼭 표기를 해야한다.
무료가 아닌 라이선스는 꼭 확인하자

1. Apache License

- 아파치 소프트웨어 재단에서 자체 소프트웨어에 적용하기 위해 만든 라이선스, 개인적/상업적 이용, 배포, 수정, 특허 신청이 가능.

2. MIT License

- 매사추세츠공과대학에서 소프트웨어 학생들을 위해 개발한 라이선스, 개인 소스에 이 라이선스를 사용하고 있다는 표시만 지켜주면 되며, 나머지 사용에 대한 제약은 없음.
  (ex. 프로젝트 소스코드에 외부에서 가져온 오픈소스의 라이선스 내용만 정확히 명시하면 충분합니다. 그런데 대부분 프로젝트에서는 자동으로 오픈소스가 같이 빌드되기 때문에 따로 관리할 필요는 없습니다.)

3. BSD License

- Berkeley Software Distribution
- 버클리 캘리포니아대학에서 개발한 라이선스. MIT와 동일

4. Beerware

- 오픈소스 개발자에게 맥주를 사줘야 하는 라이선스
