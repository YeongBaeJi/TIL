## DOM API

Document Obejct Model, Applicatoin Programming Interface

### defer, async

웹브라우저에서 돌아가는 script들은 html보다 용량이 커서 로드와 처리 시간이 오래 걸린다.
브라우저는 html을 읽다가 `<script>`태그를 만나면 script가 먼저 실행해야 하므로 DOM 생성을 멈춘다. 그래서 외부에서 script 다운받고 실행한 후에야 남은 html페이지를 처리할 수 있다.

#### 브라우저 동작 방식에 따른 이슈 해결법

1. `<script>`태그를 가장 마지막에 둔다. (`</body>`바로 위)

2. `defer`, `async` 사용
   - 그러나 1번에 완벽한 해결법은 아니다. html 문서를 모두 다운로드 받고 script를 다운 받게 되면 페이지가 느려져서 사용자 경험이 저하된다. `defer`, `async`를 통해서 이를 해결 할 수 있다.

#### defer

defer: 미루다, 연기하다

- `<script defer>`는 **백그라운드**에서 다운로드 한다.
- 따라서 html 파싱을 멈추지 않고 script를 다운로드 한다.
- DOM이 준비된 후에 실행되긴 하지만 `DOMContentLoaded` 이벤트 발생 전에 실행된다.

```
<p>...script 앞 콘텐츠...</p>

<script>
  document.addEventListener('DOMContentLoaded', () => alert("`defer` script가 실행된 후, DOM이 준비되었습니다!")); // (2)
</script>

<script defer src="https://javascript.info/article/script-async-defer/long.js?speed=1"></script>

<p>...script 뒤 콘텐츠...</p>
```

**주의!**

1. 작은 script는 먼저 다운되지만, 실행은 나중에 됩니다.
   브라우저는 성능을 위해 페이지에 어떤 script들이 있는지 쭉 살펴본 후에야 script를 병렬적으로 다운로드합니다. 위 예시에서도 script 다운로드가 병렬적으로 진행되었습니다. 그런데 이 때 크기가 작은 small.js이 long.js보다 먼저 다운로드 될 수 있습니다.

하지만 명세서에서 script를 문서에 추가한 순서대로 실행하라고 정의했기 때문에 small.js는 long.js 다음에 실행됩니다.

2. defer 속성은 외부 script에만 유효합니다.
   `<script>`에 src가 없으면 defer 속성은 무시됩니다.

#### async

async: 비동기 통신

비동기 스크립트는 **방문자 수 카운터**나 **광고 관련 스크립트**처럼 각각 **독립적인 역할을 하는 서드 파티 스크립트**를 현재 개발 중인 스크립트에 통합하려 할 때 아주 유용합니다

- `<script async>`는 페이지와 완전히 독립적으로 동작한다.
- `defer`와 동일하게 **백그라운드**에서 다운로드된다.
- 따라서, html페이지는 async script 다운이 완료되길 기다리지 않고 페이지 내 콘텐츠를 처리, 출력한다.
- 그러나 async script **실행**중에는 html 파싱을 멈춘다.
- `DOMContentLoaded`이벤트와 async script는 서로 기다리지 않는다.
  - 페이지 구성이 끝난 후에 async script 다운로딩이 끝난 경우, DOMContentLoaded는 async script 실행 전에 발생할 수 있습니다,
  - async script가 짧아서 페이지 구성이 끝나기 전에 다운로드 되거나 script가 캐싱처리 된 경우, DOMContentLoaded는 async script 실행 후에 발생할 수도 있습니다.
- 다른 script들은 async script를 기다리지 않습니다. async script 역시 다른 script들을 기다리지 않습니다.

```
<p>...script 앞 콘텐츠...</p>

<script>
  document.addEventListener('DOMContentLoaded', () => alert("DOM이 준비 되었습니다!"));
</script>

<script async src="https://javascript.info/article/script-async-defer/long.js"></script>
<script async src="https://javascript.info/article/script-async-defer/small.js"></script>

<p>...script 뒤 콘텐츠...</p>
```

**주의**

1. 비동기 스크립트 다운로드는 페이지 로딩을 막지 않기 때문에 페이지 콘텐츠가 바로 출력됩니다.
2. DOMContentLoaded 이벤트는 상황에 따라 비동기 스크립트 전이나 후에 실행됩니다. 정확한 순서를 예측할 수 없습니다.
3. 비동기 스크립트는 서로를 기다리지 않습니다. 위치상으론 small.js가 아래이긴 하지만 long.js보다 먼저 다운로드되었기 때문에 먼저 실행됩니다. 이렇게 먼저 로드가 된 스크립트가 먼저 실행되는 것을 'load-first order’라고 부릅니다.

#### dynamic script (동적 스크립트)

JS로 dynamic script를 추가 할 수 있다.

```
let script = document.createElement('script');
script.src = "/article/script-async-defer/long.js";
document.body.append(script); // (*)
```

- 동적 스크립트는 기본적으로 ‘async’ 스크립트처럼 행동합니다.
  - 동적 스크립트는 그 어떤 것도 기다리지 않습니다. 그리고 그 어떤 것도 동적 스크립트를 기다리지 않습니다.
  - 먼저 다운로드된 스크립트가 먼저 실행됩니다(‘load-first’ order).

#### 꼭 알아야할 점

**주의**
스크립트 다운로드가 끝나지 않았어도 페이지는 동작해야 합니다.

defer를 사용하게 되면 스크립트가 실행되기 전 에 페이지가 화면에 출력된다는 점에 항상 유의해야 합니다.

사용자는 그래픽 관련 컴포넌트들이 준비되지 않은 상태에서 화면을 보게 될 수 있죠.

따라서 지연 스크립트가 영향을 주는 영역엔 반드시 **로딩 인디케이터**가 있어야 합니다. 관련 버튼도 사용 불가(disabled) 처리를 해줘야 하죠. 이렇게 해야 사용자에게 현재 어떤 것은 사용할 수 있는지, 어떤 것은 사용할 수 없는지를 알려줄 수 있습니다.

**실무에선 defer를 DOM 전체가 필요한 스크립트나 실행 순서가 중요한 경우에 적용합니다. async는 방문자 수 카운터나 광고 관련 스크립트같이 독립적인 스크립트에 혹은 실행 순서가 중요하지 않은 경우에 적용합니다**

### reference

- [docs](https://ko.javascript.info/script-async-defer)
- [blog](https://webroadcast.tistory.com/15)
- [blog-2](https://wormwlrm.github.io/2021/03/01/Async-Defer-Attributes-of-Script-Tag.html)
