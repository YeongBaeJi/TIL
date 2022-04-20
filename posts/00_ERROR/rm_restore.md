# Github에 잘못 push된 폴더들

새폴더를 만들어 push하고 난 후 기존에 remote 저장소에 올라가 error폴더를 삭제하고 깔끔하게 정리하고 싶었다.
local repository에는 원하는대로 directory정리가 되었지만 remote에는 그렇지 않았다.
그래서

`git rm -r --cached`을 활용하여 remote에 있는 file과directory를 모두 정리하도록
staged하고 다시 삭제를 원하지 않는 파일만 `git restore --staged 폴더/파일명`하여 처리하였다.
그 이후 `git commit`과 `git push origin main`을 하여 remote repository에 원하는 대로 변경하였다.

- [참고](https://tyrionlife.tistory.com/186)
