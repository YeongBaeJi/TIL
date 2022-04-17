# git 403 에러

git push origin main 시에 에러발생
A github ID로 config를 설정해두고 B ID로 다시 세팅을 했다.
그런데 push를 하니 403에러 발생

`git remote set-url origin https://youngcodej22@github.com/youngcodej22/TIL.git` 을 통해서 해결

- [참고](https://velog.io/@arthur/GitHub-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0-The-requested-URL-returned-error-403)

# 다시 문제발생

- 처음에 `git config --global --unset-all` or `git config --global --unset user.email` 같은 것으로 했었지만 실패!
- 그래서 제어판에서 자격증명관리에서 기존 github id 등록 된 2개를 삭제하니 성공하게 되었다.
- [참고](https://techstock.biz/Git-Github/Git-push-denied/)
