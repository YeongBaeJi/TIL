# Data Mocking Library

## Mocking

- 서버에서 받는 데이터 없이 프로트엔드를 개발 할 때 Mock(모의 데이터)를 만들어서 활용하는 방식
- 통상적으로 data fetch를 해야하는 경우 통신을 통해 응답을 내려주는 서버가 있어야 한다.

## MSW Library

- [MSW](https://mswjs.io/)

### Install

`npm install msw --save-dev`

### Set Directory

1. `mkdir src/mocks`
2. `touch src/mocks/handlers.js`
3. Browser and Node 2가지 환경 세팅이 다르다.

- browser
  - `npx msw init public/ --save`
  - `touch src/mocks/browser.js`

```
// src/mocks/browser.js
import { setupWorker } from 'msw'
import { handlers } from './handlers'

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...handlers)
```

### Rest API

1. import, Request, Response

```
// src/mocks/handlers.js
import { rest } from 'msw'

export const handlers = [
  // Handles a POST /login request
  rest.post('/login', null),
  // Handles a GET /user request
  rest.get('/user', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        username: 'admin',
      }),
    )
  }),
]
```

### Component에서 사용 하는 법

위의 세팅하고 난 후 사용할 Component에서 msw에서 설정한 url에 대한 `response`를 받아 올 수 있다.

```
const url = 'https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json';

function TestMocking() {
  const [data, setData]:any = useState(null);
  const [error, setError]:any = useState(null);

  const handleClick = () => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        if(json.errorMessage) {
          throw new Error(json.errorMessage);
        }
        setData(json.data);
      })
      .catch((error) => {
        setError(`Something wrong: ${error}`);
      })
  }
```

### GraphQL

### typescript와 충돌 문제

`--force`로 해결

- [--force vs --legacy](https://velog.io/@yonyas/Fix-the-upstream-dependency-conflict-installing-NPM-packages-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0%EA%B8%B0)
