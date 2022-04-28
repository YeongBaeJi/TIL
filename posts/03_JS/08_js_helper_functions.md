# Customize Helper Functions

## import, export, export default

- `export default`: JS문서당 1개만 사용가능
- `export`: 여러개 사용 가능

```
// library
import _ from 'lodash'

// export default
import checkType from './getType'
export default function getType() {}

// export
import { random, user as James } from './getRandom'
export const user = {}

// export all
import * as R from './getRandom'
```

## Helper Functions

1. `getType()`

```
// main.js
import checkType from './getType'

console.log(getType([1,2,3]));

// getType.js
export default function getType(data) {
  return Object.prototype.toString.call(data).slice(8, -1);
}
```

2. `getRandom()`

```
// main.js
import random from './getRandom'

console.log(random());

// getRandom.js
export default function random() {
  return Math.floor(Math.random() * 10);
}
```
