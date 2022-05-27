# JS History

1. 1995년 넷스케이프 등장(지금의 파이어폭스)

- 당시에 이름이 'LiveScript'
- HTML을 간단히 조작하기 위한 기술로 등장

2. 비슷한 시기에 IE(Internet Explorer)에 JScript 등장

- 비슷하지만 조금 달랐다.

3. 1997년 JavaScriptECMA 등장

- 지속적인 발전, 그러나 미비했다.

4. 2005년 Ajax의 등장
5. 2009년전까지 Adobe FlashPlayer의 ActionScript를 표준화하기 위한 노력.

- 당시의 HTML,JS보다 ActionScript의 인기가 많았다.
- JS 4.0 개발에 노력했었다. 그러나 사라졌다.(스마트폰과 아이폰의 등장과 애플의 선언이 영향을 미쳤다.)

6. 2009년 EcmaScript v5.0 release

- 아이폰의 등장과 스티브잡스의 FlashPlayer 사용 중지 선언.

7. 2015년 ECMAScript 6(2015)

- 이후부터 ECMAScript2016~2021 등...연도 표기법으로 바뀜.
- 이것이 Modern JS

## ES 2015 (Modern JS)

대체로 많은 사람들이 ES2015부터 Modern JS라고 부르기 시작했다.
Node.js, NPM으로 많은 tools이 생기고 생태계 변화가 일어났기 때문이다.
많은 부분들이 있지만 **webApp의 규모가 커져서 프론트엔드 개발이라는 단어가 생기고 범위가 커졌다**라는 것을 이해하자.
주요 핵심 중 하나인 모듈이 있다.

### Module

Javascript의 시작이 HTML을 간단히 조작하기 위해서 만들어졌기 때문에 다른 언어들 처럼 Module을 지원하지 않았었다.

HTML `<head>`안에 `<script>`를 넣는 방식이 JS를 사용하는 방식이었다.
그러나 **브라우저호환성**때문에 JS파일끼리 연결 시키는 Module방식을 사용하기 어려웠다. 지금도 모든 브라우저가 지원하는 것은 아니다.

### Bundler

entry JS파일 하나를 설정하면 다른 모든 JS파일을 불러서 **하나의 파일**로 만들어주는게 Bundler의 역할이다. (뿐만아니라 sass, image 등 여러 파일을 처리한다)
Transpiler 또한 Bundler 안에 들어있다.

#### Transpiler

개발자는 JS 최신 문법으로 작업을 하고 브라우저 호환성 때문에 발생했던 문제를 Babel이라는 transpiler를 통해 낮은 버전에 JS로 변경하여 해결할 수 있다.
