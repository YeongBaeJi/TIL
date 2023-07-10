# 원티드 프리온보딩 NextJS

## :large_blue_diamond: CSR(Client-side Rendering)이란 무엇이며, 그것의 장단점에 대하여 설명.

1. 렌더링방식

- SPA에서는 주로 CSR 방식

2. 특징

- SPA에서는 첫 response에서 모든 정적 리소스들을 다운로드한다. 이후 새로운 페이지 request가 있을 때 브라우저(client)에서 페이지를 갱신하고 server에서 데이터만 전달받는다.(주로 JSON 형태)

3. 장점

- 화면 깜빡임이 없다. 그래서 UX가 우수하다.
- 초기로딩 이후 페이지 일부를 변경할 때는 구동 속도가 빠르다.
- Client-side에서 연산, routing 등을 직접 처리하기 때문에 반응속도가 빠르다. 즉, 사용성이 좋다.
- 초기에 Server는 빈 뼈대만 있는 HTML만 넘겨주기 때문에 부하가 적다.
- SSR과 달리 사용자가 보는 시점과 동작할 수 있는 시점이 동일하다. (TTV, TTI 사이 간극이 없다.)

4. 단점

- 해당 사이트에 처음 접속한다면 초기 다운로드할 파일 용량이 크다. 이로인해 로딩이 길어진다. (그러나 요즘은 인터넷 속도가 빨라서 크게 영향 받지는 않는다.)
- 웹 크롤러 bot 입장에서 HTML이 비어 있기 때문에 검색엔진이 색인할 콘텐츠가 없다. (SEO에 좋지 않다. 구글 크롬에서는 JS도 해석 할 수 있지만 아직 부족한 부분이 많다고 한다.)

5. 도구

- React, Angular, Vue 등...

6. 동작과정

- Request
  - User 사이트 접속 > Browser는 Server에 콘텐츠 Request
- Response
  - Server는 빈 뼈대만 있는 HTML을 Browser에 Response > Browser는 HTML을 parsing하고 `<script src="">`에 연결된 JS파일을 Server로 부터 다운로드한다. > 이로인해 Client-side에서 동적 DOM 생성을 하고 Rendering 완료

<br />

## :large_blue_diamond: SPA(Single Page Application)로 구성된 웹 앱에서 SSR(Server-side Rendering)이 필요한 이유에 대하여 설명해주세요.

우선 SPA의 Rendering 방식인 CSR의 보완할 점은 아래 2가지이다.

1. 초기 로딩속도 보완
2. SEO 개선

해결 방안으로 아래 2가지가 있다고 한다.

- Code Splitting / Tree shaking / Chunk 분리를 통해 JS bundle 크기를 줄여서 초기 DOM 생성 속도를 줄이면 초기 로딩속도를 개선할 수 있다.

- Pre-rendering, 라이브러리나 webpack plugin을 통해 각 페이지에 대한 HTML 파일을 미리 생성 해둔 뒤 Server에서 Request하는 것이 크롤러봇이라면 pre-rendering된 HTML 페이지를 보여주는 방식을 통해 개선

그렇지만 NextJS를 통해 더 간편하게 구현할 수 있는 것으로 알고 있다.

<br />

## :large_blue_diamond: Next.js 프로젝트에서 yarn start(or npm run start) 스크립트를 실행했을 때 실행되는 코드를 Next.js Github 레포지토리에서 찾은 뒤, 해당 파일에 대한 간단한 설명을 첨부해주세요.

NextJS를 설치하기 위해 `npx create-next-app@latest` 명령어를 입력하면 NextJS프로젝트가 생성된다. 이후 `.next`라는 폴더를 유심히 살펴봐야한다.
development 모드일 경우와 다르게 `build`를 통해 production 모드가 되면 `.next` 폴더에서 아래와 같이 디렉토리 구조가 바뀐다. 즉 `page` 폴더가 생성되고 webpack에 의해 작업한 내용이 bundle 되게 되는 것 같다.

```bash
.next
├── cache
├── server
│   ├── app
│   ├── chunks
│   └── pages
│      ├── _app.js
│      ├── _document.js
│      ├── _error.js
│      ├── 404.html
│      └── 500.html
├── static
└── types
```

NextJS 공식 레포지토리에서 [packages 폴더](https://github.com/vercel/next.js/blob/canary/packages/next/src/pages/_app.tsx)에 보면 이런 파일들이 존재하는데 이부분들과 연결이 있는 것 같아 보인다.

<br />

---

<br />

# 기본 개념부터 NextJS 까지

## :large_blue_diamond: SPA란?

- Single Page Application.
- 하나의 페이지로 구성된 웹 어플리케이션을 말한다. 즉 `index.html` document 하나만을 이용하고 동적으로 JS를 이용하여 Data와 UI를 바꾸면서 조작하는 방식.

<br />

## :large_blue_diamond: 기존 전통적인 방식은? (MPA)

- Multi Page Applcation.
- url을 입력한 후 첫 페이지(document)를 response 받는다. 이후 페이지가 바뀔 때마다 서버에 Request하고 브라우저(client)에서 Response하는 방식.

<br />

## :large_blue_diamond: 기존 방식의 단점과 SPA가 탄생한 이유?

- 매번 새로운 페이지(HTML document)를 Server로 부터 받아온다. 그로인해 화면 전환시 깜빡임이 발생.
- [AJAX(Asynchronous Javascript and XML)](https://developer.mozilla.org/ko/docs/conflicting/Web/Guide/AJAX_21419c7dfa67c94789f037a33c4e4e3e)의 등장으로 화면 깜빡임 없이 원하는 데이터만 동적으로 교체할 수 있다.

<br />

---

## :large_blue_diamond: CSR(Client-side Rendering)이란 무엇이며, 그것의 장단점에 대하여 설명.

1. 렌더링방식

- SPA에서는 주로 CSR 방식

2. 특징

- SPA에서는 첫 response에서 모든 정적 리소스들을 다운로드한다. 이후 새로운 페이지 request가 있을 때 브라우저(client)에서 페이지를 갱신하고 server에서 데이터만 전달받는다.(주로 JSON 형태)

3. 장점

- 화면 깜빡임이 없다. 그래서 UX가 우수하다.
- 초기로딩 이후 페이지 일부를 변경할 때는 구동 속도가 빠르다.
- Client-side에서 연산, routing 등을 직접 처리하기 때문에 반응속도가 빠르다. 즉, 사용성이 좋다.
- 초기에 Server는 빈 뼈대만 있는 HTML만 넘겨주기 때문에 부하가 적다.
- SSR과 달리 사용자가 보는 시점과 동작할 수 있는 시점이 동일하다. (TTV, TTI 사이 간극이 없다.)

4. 단점

- 해당 사이트에 처음 접속한다면 초기 다운로드할 파일 용량이 크다. 이로인해 로딩이 길어진다. (그러나 요즘은 인터넷 속도가 빨라서 크게 영향 받지는 않는다.)
- 웹 크롤러 bot 입장에서 HTML이 비어 있기 때문에 검색엔진이 색인할 콘텐츠가 없다. (SEO에 좋지 않다. 구글 크롬에서는 JS도 해석 할 수 있지만 아직 부족한 부분이 많다고 한다.)

5. 도구

- React, Angular, Vue 등...

6. 동작과정

- Request
  - User 사이트 접속 > Browser는 Server에 콘텐츠 Request
- Response
  - Server는 빈 뼈대만 있는 HTML을 Browser에 Response > Browser는 HTML을 parsing하고 `<script src="">`에 연결된 JS파일을 Server로 부터 다운로드한다. > 이로인해 Client-side에서 동적 DOM 생성을 하고 Rendering 완료

<br />

### :small_orange_diamond: React-Router를 포함한 상세한 동작 순서

html 다운로드 -> 화면에 그려지면서 head 태그에 있는 js 번들 다운로드 -> js 스크립트 실행 -> React 실행 -> 트리 최상위부터 렌더링 해야 할 컴포넌트들 확인 -> react-router-dom의 Router 컴포넌트가 현재 url 확인하여(ex. switch / case) 렌더링할 컴포넌트 판단 -> 컴포넌트 최종 렌더링

<br />

## :large_blue_diamond: SSR(Server-side Rendering)이란 무엇이며, 그것의 장단점에 대하여 설명.

1. 렌더링방식

- MPA에서는 SSR 방식

2. 특징

- 새로운 request가 있을 때마다 server에서 rendering한 정적 리소스를 받는다.

3. 장점

- CSR은 JS 다운로드를 기다려서 속도가 느렸지만, SSR은 초기 구동속도가 빠르다.
- CSR과 달리 HTML에 모든 것이 담겨있기 때문에 SEO에 좋다.

4. 단점

- 화면 깜빡임.
- JS를 다운로드 받는 중에 사용자가 액션을 취했을 때 원하는 동작이 이뤄지지 않을 수도 있다. (TTV, TTI 사이 간극이 있다.)
- 매번 Server에 Request 해야해서 서버 부하가 있다.

5. 도구

- PHP, JSP, Node.js(pug, ejs, handlebars) 등...

6. 동작과정

- Request
  - User 사이트 접속 > Browser는 Server에 콘텐츠 Request
- Response
  - Server는 렌더링 준비를 마친 HTML, CSS, JS를 Browser로 Response > Broswer는 Response 받은 페이지를 보여준다.

<br />

## :large_blue_diamond: 기타 다른 방식

1. SSG (Static Site Generation)

- 서버에 request할 데이터가 없어 데이터가 바뀔일이 거의 없는 블로그 같은 caching해두면 좋은 페이지에 적합. (SSR은 request시 즉시 만들어서 데이터가 달라지는 페이지에 적합하다.)

<br />

### :small_orange_diamond: 기억할 점

- SPA !== CSR / MPA !== SSR, 두 방식은 렌더링을 어디서 하느냐에 초점이 맞춰진다. 따라서 SPA에서 SSR도 도입할 수 있다.

<br />

## :large_blue_diamond: CSR의 단점 보완

1. 초기 로딩속도 보완 방법

- Code Splitting / Tree shaking / Chunk 분리를 통해 JS bundle 크기를 줄여서 초기 DOM 생성 속도를 줄이면 초기 로딩속도를 개선할 수 있다.

2. SEO 개선

- Pre-rendering, 라이브러리나 webpack plugin을 통해 각 페이지에 대한 HTML 파일을 미리 생성 해둔 뒤 Server에서 Request하는 것이 크롤러봇이라면 pre-rendering된 HTML 페이지를 보여주는 방식을 통해 개선

<br />

### :small_orange_diamond: CSR + SSR / SSG

CSR에 SSR, SSG를 도입하여 위 2가지 단점을 보완할 수도 있다.

1. without Framework

- express, nestJS 등을 사용하여 별도의 서버를 직접 운영하는 방법

2. with Framework

- (React) NextJS, Gatsby
- (Angular) Universal
- (Vue) NuxtJS

초기 Rendering은 SSR방식으로 하고 이후에는 CSR을 사용하는 방식을
**Isomorphic(동일 구조의) App / Universal Rendering**이라고 한다. (이를 통해 CSR의 장점을 가져가면서 단점도 보완할 수 있다.)

<br />

### :small_orange_diamond: CSR, SSR, SSG, Universal 무엇을 사용해야 하나?

1. CSR

- 검색엔진에 노출될 필요가 없는 유저 개인정보로 이루어진 페이지의 경우

2. SSR

- 회사 홈페이지처럼 상위 노출이 필요한 경우

3. SSG

- 회사 소개 페이지이지만 내용 업데이트가 거의 없는 경우

4. CSR+SSR

- 검색엔진에 따른 상위노출 필요성과 화면 깜빡임 없는 인터랙션, 사용자에 따라 페이지 내용이 달라지는 경우

<br />

---

#### :bookmark_tabs: 출처

- [테코톡](https://www.youtube.com/watch?v=YuqB8D6eCKE)
- [CSR+SSR](https://tecoble.techcourse.co.kr/post/2021-09-10-ssr/)
- [CSR,SSR SEO 해결](https://www.youtube.com/watch?v=D71ByEIBWEs)
