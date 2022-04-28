# Lodash.js

- `_.uniqBy()`
- `_.unionBy()`

```
import _ from 'lodash'

const userA = [
  {userId: '1', name: 'James'},
  {userId: '2', name: 'Two'},
]

const userB = [
  {userId: '1', name: 'Jame'},
  {userId: '3', name: 'Three'},
]

const userC = userA.concat(userB)

// 중복 값을 제거
console.log(_.uniqBy(userC, userId))


// 고유화 배열
const userD = _.unionBy(userA, userB, 'userId)
```

- `_.find(obj, target obj)`
- `_.findIndex(obj, target obj)`
- `_.remove(obj, target obj);`
