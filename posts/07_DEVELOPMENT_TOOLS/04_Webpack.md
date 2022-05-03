# Webpack

웹팩 Bundler(묶음)

## 프로젝트 생성

1. package install

- `npm i -D webpack webpack-cli webpack-dev-server@next`

2. script

- `"dev": "webpack-dev-server --mode development"`
- `"build": "webpack --mode production`

3. webpack.config.js 파일 생성

## entry / output

- [docs](https://webpack.js.org/concepts/)

```
// import - node.js 전역에 있는 path 객체
const path = require('path');

// export
module.exports = {
  // 파일을 읽어들이기 시작하는 진입점 설정
  entry: './js/main.js',

  // 결과물(번들)을 반환하는 설정
  // path는 node.js 필요로하는 절대경로 입력
  // clean: build시 기존 파일 정리
  // path, filename 생략 가능
  output: {
    // path: path.resolve(__dirname, 'dist'),
    // filename: 'main.js',
    clean: true
  }
}
```

## plugins

`dist`되는 `output` 파일은 JS파일이기 때문에 template으로 `html`을 사용 가능하게 플러그인을 설치할 수 있다.

1. `npm i -D html-webpack-plugin`

```
...
const HtmlPlugin = require('html-webpack-plugin');

// export
module.exports = {
  ...

  plugins: [
    new HtmlPlugin({
      template: './index.html'
    })
  ]
}
```

## 정적 파일 연결

- static폴더를 생성하여 파일들을 넣는다.
- `npm i -d copy-webpack-plugin`을 설치하여 `<img>`경로 지정을 해주자
- `webpack.config.js`파일에서 `static`폴더를 지정할 수 있는 설정을 넣는다
- 결과적으로 `dist`폴더에서 `images`경로를 찾기 때문에 `build`된 이후에 디렉토리들을 생각해야한다.

```
plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static' }
      ]
    })
  ],
```

## module

- `static/css/main.css`를 생성하여 사용 할 수도 있지만 module로 만들어보자
- `main.js`에 `import './css/main.css`를 넣는다.
- `npm i -D css-loader style-loader`
  - `css-loader`
    - js파일에서 css를 해석하는 용도
  - `style-loader`
    - html에 style안으로 css을 삽입해주는 용도
  - **⚠️반드시 style-loader부터 작성**

```
 module: {
    rules: [
      {
        // 정규표현식: $앞에있는 문자로 끝나는 것을 찾는다
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
```

## SCSS

- `npm i -D sass-loader sass`
  - `sass-loader`
    - webpack에서 sass파일 읽는 용도
  - `sass`
    - sass 문법을 사용하기 위한 패키지

```
 module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
```

## Auto prefixer(PostCSS)

예를 들어 `display: flex`를 추가 했을 때 `ms`또는 `webkit` prefix가 자동으로 생성되게 하는 package이다

- `npm i -D postcss autoprefixer postcss-loader`

- package.json에 현재 우리가 지원하는 브라우저에 대해 입력

```
 "browserslist": [
    "> 1%",
    "last 2 versions"
  ]
```

### .postcssrc.js

```
module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}
```

## babel

- `npm i -D @babel/core @babel/preset-env @babel/plugin-transform-runtime`
- `.babelrc.js` 생성
- `npm i -D babel-loader`

```
module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    ['@babel/plugin-transform-runtime']
  ]
}
```

## Netlify 배포

## NPX, Degit
