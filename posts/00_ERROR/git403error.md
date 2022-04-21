# git 403 Error

## 발단

Github ID A로 OS에 설정이 되어있는데 ID B를 생성하여 `config` 설정 후 `push`를 하였는데 403에러가 발생 했다.

## 해결법

1. 제어판 사용자계정> 자격증명관리(왼쪽바) >윈도우 자격증명 > 사용 안할 깃헙 ID 지운다. (한개만 사용 추천, 두개 가능하지만 비추)

2. `git config --global --unset user.email`, `git config --global --unset user.username` 하여 삭제 후 재등록한다.

- 또는 `git config --global --unset-all`

3. `git remote set-url origin https://깃헙아이디@github.com/깃헙아이디/레포이름.git`

- remote repository에 대한 등록을 한다.

4. push 하면 팝업으로 로그인 화면이 나타날 대 token 비번을 기입한다.

## 참고

- [참고](https://velog.io/@arthur/GitHub-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0-The-requested-URL-returned-error-403)
- [참고](https://techstock.biz/Git-Github/Git-push-denied/)
