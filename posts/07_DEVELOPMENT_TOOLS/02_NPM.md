# NPM

**Node Package Manager**
전 세계의 개발자들이 만든 다양한 기능(package, module)들을 관리

### install

- Node.js 설치 시 같이 설치가 된다

### CLI

- create package.json: `npm init -y`
- install package: `npm i [package]`
  - (`i`대신 `install` 가능)
- install dev package: `npm i -D [package]`
  - (`i`대신 `install` 가능, `-D` 대신 `--save-dev` 가능)
- list: `npm ls`(=list), `npm ls -g --depth=0`
- version: `npm --version`, `npm -v`
- latest info: `npm info [package]`
  - `node_modules`에서 실제 package가 설치된 폴더에 들어가 `package.json`을 확인하면 version을 제대로 확인할 수 있다.
- latest install: `npm i [package]@version`
- update: `npm update [package]`

### package.json

```
{
  "name": "test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "parcel index.html",
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {},
  "devDependencies": {}
}
```

- `name`: 프로젝트 이름
- `version`: 프로젝트 버전
- `description`: 프로젝트에 대한 설명
- `main`: npm 생태계에 올릴 package module을 만들 때 올리는 파일을 의미. 일반 웹사이트 제작 프로젝트는 필요치 않음.
  - ex. lodash.js package.json을 보면 `main`이 `loadash.js`로 되어있다. 우리는 이 package를 `import _ from 'lodash.js`로 가져올 수 있다.
- `script`: script안에 내가 원하는 명령어(ex.dev)를 통해 package에서 요구하는 명령어 라인을 실행시키도록 설정
- `keywords`:
- `author`: 저작자
- `license`: 라이센스
- `dependencies`: 설치된 package
- `devDependencies`: 배포하지 않고 개발만을 위해 필요해서 설치된 package

#### package-lock.json

- 설치한 package가 내부에서 의존하는 package들도 설치가되고 이를 관리하는 파일이다. (직접 관리하지 않는다)

#### Semantic Versioning (SemVer)

유의적 버전
npm package들의 버전을 표기하는 방법

**`^Major.Minor.Patch`**

- Major
  - 기본 버전과 호환X, 새로운 버전
- Minor
  - 기존 버전과 호환O, 새로운 기능이 추가된 버전
- Patch
  - 기존 버전과 호환O, 버그 및 오타 등이 수정된 버전
- `^`
  - Major 버전 안에서 가장 최신 버전으로 업데이트 가능을 허용
  - ex. Node.js `^12.14.1`일 경우 12가 바뀌지 않고 나머지 부분이 최신 버전으로 업데이트 가능하다는 의미
