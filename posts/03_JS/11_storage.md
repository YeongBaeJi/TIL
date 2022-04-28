# Storage

## Local Storage

- 데이터가 만료되지 않는다
- `localStorage.setItem(key, value)`
- `localStorage.getItem(key)`
- `localStorage.removeItem(key)`

```
const user = {
  name: 'James',
  age: 20
}
localStorage.setItem('user', JSON.stringify(user))
localStorage.getItem(JSON.parse('user'))
localStorage.removeItem('user')

// modify
const str = localStorage.getItem('user');
const obj  = JSON.parse(str);
obj.age = 30;
localStorage.setItem('user', JSON.stringify(obj));
```

## Session Storage

- 페이자를 닫을 때 데이터가 사라진다
- `sessionStorage.setItem(key, value)`

## library

lodash.js 기반에 storage 사용

- [LowDB](https://github.com/typicode/lowdb)
