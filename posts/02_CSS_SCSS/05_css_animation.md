# CSS Animation

## Transition (전환)

- `transition: transition-property transition-duration transition-timing-function transition-delay`

- 여러요소 적용 시: `transition: transform .1s, background-color .6s;`

- 요소의 전환(시작과 끝)효과를 지정하는 단축속성

## transform (변환)

1. 2d transform

- `translate`: 이동
- `matrix`: 2d transform 한줄에 설정
- `scale`: 크기 배율
- `rotate`: 회전
- `skew`: 비스듬하게
- 여러요소 적용 시: `transform: skewX(-14deg) scale(!.3);`

2. 3d transform

- `perspective`
  - 하위 요소를 관찰하는 '원근 거리' 지정(속성 적용시 가장 앞에 삽입)
- `backface-visibility`
  - `visible`: 뒷면 보임
  - `hidden`: 뒷면 숨김

### perspective 속성과 함수 차이점

1. `perspective: 100px`

- 적용대상: 관찰 대상의 부모
- 기준점 설정: `perspective-origin`

2. `transform: perspective(100px)`

- 적용대상: 관찰 대상
- 기준점 설정: `transform-origin`
