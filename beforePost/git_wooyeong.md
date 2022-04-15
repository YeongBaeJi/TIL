# 메가바이트 최우영 github, git

## install

- [추천!git flow를 위해](https://gitforwindows.org/)
- [비추!이거는 기본설치라서](https://git-scm.com/)
- [git log를 lg로 바꿈](https://gist.github.com/johanmeiring/3002458)

## History

## Shell

운영체제의 커널과 사용자를 이어주는 소프트웨어
cli bash shell 등 용어에 대해 알아보자

GUI CLI

CLI상에 shell 역할 bash다.
윈도우탐색기가 GUI상에 shell 역할이다

## Git bash 사용법

~,$: shell프로그램이 사용자의 명령어를 받을 준비가 됐다는 의미

유저이름@컴퓨터이름 MINGW64 ~/주소

## CLI 명령어

### basic

- `pwd`: 현재 디렉토리 주소 보여줌
- `clear`: bash 정리
- `-`: flag(깃발), 이걸 사용하면 깃발 올리듯 option을 사용한다는 의미.
- `ls`: 현재 directory에서 하위에 파일 list를 보여줌.
- `ls -a`: 숨긴파일 까지 볼 때(그러나 windows에서는 조금 다름. 안나타날 수도 있다)
- `ls -l`: 상세정보를 볼 수 있다.
- `ls -al`: 숨긴파일 상세정보
- User최상단 디렉토리에서 Documents폴더는 항상 있다.
- `cd`: 최상단 directory로 간다
- `cd ../`: 밖으로 나가서 올라간다. 상위 directory
- `cd ./`: 현재 directory

### file

- `mkdir 폴더명`: 폴더(directory) 만들기
- `touch 파일명`: 파일생성
- `touch 파일명 파일명`: 여러개 파일 생성
- `touch 폴더명/파일명`: (상위 디렉토리에 있을 때 하단에) 해당 디렉토리에 파일 생성
- `echo`: print용도 `echo 'hello'`
- `mv 파일명 옮길directory`: 파일 옮기기
- `mv ../상위파일이름 ./ `: 다른 위치에 있는 파일을 현재 폴더로 옮기기
- `cp 파일명 복사시킬 폴더명`: 파일 복사
  - `cp hello.md ./hello-copy.md`: hello.md 복사해서 hello-copy.md로 이름바꿔 복사
- `mv ../server.* ./`: 상위 폴더에서 server로 시작하는 파일들을 가져온다.
- `rm 파일명`: 삭제
- `rm server.*`: 해당 파일명 모든 파일 삭제
- `rm 폴더명`: cannot remove '폴더' is a directory
- `rm -r 폴더명`: 상위 폴더로 나온뒤 하위 폴더를 강제 삭제. `-r`안 붙이면 삭제안됨
- `rm -rf 폴더명`: 이것도 강제권한으로 삭제
- `rm /`: 이거는 절대 하면안됨! 모든것이 사라짐
- `sudo`: 관리자권한으로 실행하는 명령어
- `mv 현재파일명 바꿀파일명`: 파일명을 바꿀 때 (ex. mv one.md two.md)

### vim (editor in CLI)

- .swp 파일 중요!
- `vim 파일명`: 해당 파일 열기 (`vi 파일명도 된다`)
- `i` 누르면 insert(끼워넣기) 모드로 들어간다. 들어가서 타이핑 가능하다
- `esc` 누르면 normalmode로 빠져나온다.
- `shift키+;`: 저장하기 전
- 저장하기 들어가서 `:w`는 저장
- `:q`: 나가기
- `:wq`: 저장하고 나기기
- `:q!`: 강제종료
- `cat 파일명`: 파일 안에 내용 확인

### GIT 장점

- 동시작업 생산성 증가
- 수정내용 commit 단위로 관리, 배포 뿐 아니라 원하는 시점으로 checkout 가능
- 새로운 기능 추가는 branch로 개발하여 편안한 실험이 가능, 성공적으로 개발이 완료되면 merge하여 반영
- 인터넷이 연결되지 않아도 개발이 가능

### GIT objects

- blob: 파일 하나의 내용에 대한 정보
- tree: blob이나 subtree의 메타데이터(디렉토리 위치, 속성, 이름 등)
- commit: 커밋 순간의 스냅샷

### Git process flow and command

### Cloud remote repository services

github: ms인수
bitbucket: 엔터프라이즈 단위 일 때 많이 사용. 디자이너 등 다른 직원도 포함
gitlab: 사설 서버 구성이 가능(보안에 강점)

### git 설정

- `git config --list`: (빠져나올 때 q)
- `git config --global user.name "이름"`
- `git config --global user.email "이메일"`
- `git config --global core.editor "vim"`
- `git config --global core.pager "cat"`

### github repository 만들고 이후

- `git clone (주소)https://github.com/wudqo89/first-repo.git`
- `.git`: clone하면 이 폴더가 생성되는데 이거 삭제하면 `git status`안되고 not a git repository가 나온다
  - `git status`이후에 nothing to commit, working tree clean은 잘 된 것을 의미.
- `git remote`: 하면 `origin` 나온다
- `git remote add newname`: 새로운 별칭 설정, 그러면 remote 다시 하면 origin newname 둘다 보인다.
- `git remote -v`: remote 별칭들에 대한 주소들 볼 수 있다.
- `git add 파일명` 후에 `git commit` 하면 vim으로 연결된다.
- `git commit -m`: **사용하지 말자!** 팀마다 다르지만 `merge`할 때 override 되서 문제가 된다. 그래서 **vim**을 통해 message를 작성하자.
  - **`-m`를 사용하면 취소 할 수 없다. vim을 열어서 하는 것이 좋다**

### 설명

```
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   README.md

no changes added to commit (use "git add" and/or "git commit -a")
```

- `origin`: remote repository에 관습적인 별칭.

## 중요 포인트!

1. **파일 여러개를 작업하기 때문에 그 작업 단위를 잘 신경 써야한다. (ex. 2개의 파일을 수정하면 2개의 commit.)**

- commit을 어떻게 나누지?
  - add를 하나씩한다. (독립된 것이기 때문이다.)
  - 그래서! app.js를 수정했으면 add 후 commit해서 메시지 남기고 그 다음 readme.md 파일 수정하고 나서 add 후 commit을 한다
- **작업 단위를 시간 순으로 먼저 올린다**

2. 나중에 push 후 로그인 풀리면
   setting>developer setting>generate token 60days 발급받아서 password 대신 사용 (요즘 ssh 안쓴다)
3. `git add .` 하면 안된다. (실수할 여지 다른 파일도 올라갈 수 있으니)

4. **commit 작성법**

- [참고](https://www.conventionalcommits.org/ko/v1.0.0/)
- 영어로 (팀마다 다르지만 오픈소스는 영어)
- capitalize 첫글자 대문자!
- 띄어쓰기
- prefix 꼭 다기
- `git commit`하면

5. **git은 빈 디렉토리를 만들어도 tracking하지 않는다. 파일 단위로 한다**

```
docs: Add README.md

커밋 내용

status 내용
```

### hexo

node.js기반 static generator(블로그 유용)

- [hexo](https://hexo.io/index.html)
- [youtube강의](https://www.youtube.com/watch?v=FwRKkZXSdY8)

1. `npm install -g hexo-cli`
2. 공식 문서로 공부하자
3. `hexo init (디렉토리명)blog`
4. `hexo generate`: static files 생성(html/css/js) **변경사항 있으면 항상 하기**
5. `hexo server`: localhost
6. `hexo new post(포스트명) "My first hexo blog" `: 새로운 포스트 등록
7. `vi source\_posts\My-first-hexo-blog.md`: md파일 들어가서 작업
8. hexo에서 vim상태에서 `소문자 o` 누르면 metadata 넘어서 바로 글 쓸 수 있다.
9. `hexo clean`: public 안에 모두 삭제
10. `hexo clean && hexo generate`: **변경사항 있을때 항상**
11. `github ID명.github.io`로 repository 만들기
12. `vi _config.yml`에서 `https://github.com/wudqo89/wudqo89.github.io.git`

- url에서 `https://wudqo89.github.io` (/하면 안됨)

13. deployment에서

- `type: git`
- `repo: https://github.com/wudqo89/wudqo89.github.io.git`
- `branch: main`

14. `npm install hexo-deployer-git --save`
15. `npm install hexo-theme-next --save`

- [참고](https://theme-next.js.org/)
- [참고](https://github.com/next-theme/hexo-theme-next)

16. `vi _config.yml`에서 `Extensions`에서 `theme: next`
17. `hexo deploy`: 배포
18. `wudqo89.github.io`로 들어가보자

## 기타

- [NVM windows](https://kdydesign.github.io/2020/09/16/nvm-for-windows/)

## GIT 용어

1. `HEAD`: 최신을 말함.

## Github 용어 설명

1. README.md

- 프로젝트와 Repository를 설명하는 책의 표지와 같은 문서
- 나와 동료, 이 repo의 사용자를 위한 문서

2. license

3. .gitignore

- **`git status`하면 tracking 안함을 확인**
- node_modules 폴더 같은 불필요한 것은 무시할 수 있도록 등록
- keyfile.pem : 아마존웹서비스에서 중요한 파일 (해킹때문에 저거 있으면 큰일)
- credential/\*\*: 이 폴더에 모든
- secrets.\*
- \*.java
- commit: **prefix: conf**로 설정
- [프로젝트 시작하자마자 생성하고 붙여넣기](https://www.toptal.com/developers/gitignore)

## Branch

분기점을 생성하여 독립적으로 코드를 변경할 수 있도록 도와주는 모델

### branch 명령어

1. **default branch가 master는 노예를 연상 시켜서 main으로 바뀜**
2. `git branch`: branch 리스트
3. `git branch print-hello`:
4. `git switch print-hello`(=`git checkout print-hello`)

- `switch가 최신용어, checkout은 예전` (checkout에서 switch 두개로 나뉘어진 역사 조사)

5. 기본적으로 main branch에서 push 하는게 좋다. (모든 branch에서 할 수 있지만)
6. `git merge print-hello`: main branch 이동해서 합병할 print-hello branch를 입력 (**한번에 1 branch씩 merge 하자! 여러개 가능 하지만 위험**)
7. `git branch -D print-hello`: print-hello에 가서 branch 삭제. (branch의 life-cycle이 다되었으면 삭제하는게 좋다. 더 이상 불필요하면 삭제하자)
8. **sub branch에서 작업하면 add, commit까지 하고 main branch로 넘어가자**

### Merge

1. merge conflit

- 둘 중 하나 수정
- 둘 다 지우거나
- 서로 재조립

2. `unmerged, both modified` 상태라면 아직 commit을 안한 상태를 의미, 그래서 commit하면 메시지 적혀있다. (\*\*이래서 commit -m를 쓰지 말아야 한다. 여기서 자동 `merge branch '' into main`이라는 자동 메시지가 생겨서)

3. git flow 그림을 network graph에서 보면 생각한 것과 다르게 main만 있는데 main에서 remote main으로 보내기 때문에

4. git switch repeat-hello
   git push -u origin repeat-hello
   리모트에 없던 브랜치일때 -upstream 한번 해야한다.

5. push된 브랜치는 github에서 브랜치 밑에 view all branches 누르고 delete

## branching models

1. git flow

- window는 설치없고 mac은 설치

- main - (release branch) - develop - feature
  - relaese branch를 따로 만들어서 main으로 옮기기 전에 상태를 하나로 모이게 만들어준다.

2. `git flow init`

- 엔터로 설정 완료

3. `git flow feature start print-world`: feature/print-world로 branch를 만들었다

git config --global user.email "you@example.com"
git config --global user.name "Your Name"

4. `git flow feature finish print-world`: 이 finish 명렁어 모든 것을 처리. feature branch를 local에서 merge하고 life-cycle이 다되어 자동 삭제

```
Summary of actions:
- The feature branch 'feature/print-world' was merged into 'develop'
- Feature branch 'feature/print-world' has been locally deleted
- You are now on branch 'develop'
```

5. `git flow release start v0.1`: release branch 생성

6. `git flow release finish v0.1`: 새로 만들었던 release branch에서 main으로 merge하는 거다

7. `git push -u origin develop`: 현재 develop branch면
   `git push origin main` > `git push --tags`

## Revert (실수한 상황 되돌리기)

1. `mv README.md readme.md`:로 파일 이동 및 이름 변경을 해버리면 git에서는 알아차릴 수 없다. 그래서 `untracked files, deleted`가 발생된다. 조심하자!

- `git mv README.md readme.md`: **git을 붙이면 해결가능. status는 tracking이 가능하다**

2. `git restore 파일명`: 최신 commit의 상태로 돌아간다.
   (`cat 파일명`하고 코드 확인가능)
   (**working directory에서 변경 사항을 취소하고 싶을 때만 사용 가능**)

## Unstaging

`git add 파일명`을 통해 staging을 한것을 취소하는 것을 말함

1. `git reset HEAD 파일명`: add 했던 것을 취소하는 것(다시 working directory로 돌려 놓는 것)

## commit 취소

1. `git commit --amend`: commit 메시지 수정

2. `git reset --hard HEAD~3`: push된 직전 3개의 commit을 삭제, remote에 강제 push

- **다른 팀원들의 repo와 달라져서 나에게 혼동이 온다**
- **또, 일어났던 실수에 대한 기록이 없어서 알 수가 없다. (절대 reset 사용하지 말자. 추천)**

3. `git revert --no-commit HEAD~3..`: 잘못하기 전 과거로 돌아가 최신을 유지하면서 되돌렸다는 이력을 commit으로 남겨 모
   든 팀원이 이 사항을 공유하고 주지시킬 수 있음.
   - `--no-commit`: Commit은 나중에 한다는 의미
   - `HEAD~3..`: 3개를 되돌려서 HEAD(최신)으로 돌아간다는 의미
   - 이후 다시 commit을 하자! 그러면 **Revert 메시지를 볼 수 있다.**

## version numbering 방법!

1. minor change

- 이전 버전에서 업그레이드
- 0.1v (뒷 자리 바뀜)

2. major change

- 새로운 기능 추가 또는 드랍
- 1.0v (앞 자리 바뀜)

3. ex.react 16.0.2 라면 회사마다 2자리, 3자리로 선택. 끝 자리는 버그수정 등 작은 단위를 말함 (4자리는 보통 안하고 v0.1.0.22041400r12 뒷자리만 날짜 밑 기타사항으로 표기)

## commit prefix

1. fix: 파일이름 바꾼경우 기능 개발을 할 수 있느냐의 차이 때문에 이름만 바꿔도 fix이다

## 조 협업 실습(영상참고)

목적: conflict를 유도하고 연습하자

1. repository 만들기 fizzbuzz-with-u

- readme, gitignore. license. 언어 선택

2. documents/dev에 clone
3. `git flow init` enter
4. `touch fizzbut.py`
5. `git add` `git status`
6. `git commit` commit message작성
7. `git push -u origin develop`: 처음 세팅 때 -upstream 사용
8. 팀원에게 주소 전달
9. github사이트에서 ISSUE 메뉴에서 작성 (앞으로 생길 할일 작성- do fizzbuzz)
10. `git fork`: 팀원은 clone한 조장의 repo가 아닌 fork를 통해 사본에서 일을 한다. 팀원은 pull-request를 통해 일한다.

conflict 피하려면 일단
서로 다른 파일 작업
conflict를 일부러 일으켜서 같은파일을 다룬다

**Final practice 문서화 하는거 토론**
코드를 어떻게 짤지 기획만

### 팀협업 기획

피보나치킨

1. commit message에서 prefix를 다양하게 써보는거
2. conflict 없이 과정
3. conflict 있이

주말까지 문서 분배.
문서

1. 레이아웃 문서
2. 내용 문서
3. 스타일링 어떻게 할 것
4. 적용 하고 싶은 애니메이션 조사
5. 사진 조사 문서
6. 피보나치 수열 먼저 조사
7. 피보나치 수열 알고리즘 찾기
8. 피보나치 수열 개념 조사후 말로 JS 어떻게 짤지 고민?

## 연주님 1:1 협업

- [연주님-팀장](https://github.com/JO-Yeonju/team-with-u/tree/develop)

- gitignore: node 설정

### 팀장

1. `git flow init`: develop 생성
2. develop에서 공동제작 파일
3. `touch gitflowprac.js`
4. git status git add git commit(feat)
5. `git push -u origin develop`
6. 팀원에게 url 전달

### 팀원

1. issue
2. fork
3. dev/ clone
4. git flow init
5. git flow feature start
6. vi team.html
7. cat team.html
8. 작성하고
9. `git flow feature finish do-teamwith` 내 bash merge commit 안나옴
10. git push -u origin develop
11. 사이트 main에서 compare pull request

- 연주님 develop 로 내꺼 develop 화살표 왼쪽

12. change request 에서
    팀원은 push하면 pull request에 그대로 반영됨
    - [upstream](http://www.notforme.kr/archives/1631)

문제

1. merge commit solve 메시지 어떻게
2. css color 변경은 fix인가 refactoring 인가

---- 공부법 qna ----

**크롬에서 ctrl+shift+R 하면 cache 지우고 refresh**

1. 공식 docs reference로 공부
2. 코드 레벨업할때 남의 코드 본다stackoverflow (어폴트 갯수 많은거 본다)

**기술 면접 때 코드에서 어떻게 개선할 수 있는지 깊이를 물어본다**

**질문**
fork와 clone의 차이

clone도 push하면 팀깃헙에 request 요청할 수 있는데
fork를 해야하나?

해피해킹 키보드 좋음
