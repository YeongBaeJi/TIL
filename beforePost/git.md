# 버전관리

- Git은 컴퓨터 파일의 변경사항을 추척하고 여러 사용자들 간에 해당 파일 작업을 조율하기 위한 대표적인 버전 관리 시스템(VCS)입니다.

## install

1. 깃 홈페이지에서 download

## 사용

1. vscode에서 터미널 연결 단축키
2. 사이드바에 버전관리 누르기 master(main) 브랜치 확인 작업표시줄

## cli

1. `git --version`
2. `git init`: Initialized empty Git repository in /디렉토리/.git/
3. 개행문자(newline 설정)

- 줄바꿈되는 문자를 뜻함, os마다 다르다
- 협업시 타인의 os가 다를 수 있기 때문에 VCS 사용시 이것을 설정해주는 것이 좋다
- [참고](https://www.lesstif.com/gitbook/git-crlf-20776404.html)
- mac: `git config --global core.autocrlf input`
- windows: `git config --global core.autocrlf true`

6. `git config --global user.name '가입시 이름'` (깃헙 가입시 이름 일치 안해도 되지만 되도록 동일하게 추천)
7. `git config --global user.email '가입시 이메일'` (이메일은 깃헙과 동일하게)
8. `git config --global --list`
9. `git status` (빨간색, 초록색 상태)

- .DS Store: mac에서 사용하는 파일

8. `git add .`: (추적할 파일) 모든 파일을 추가, 다시 `status`하면 초록색으로 add된 상태를 볼 수 있다.
   (**해당컴퓨터에서 stage라는 공간에 올라가면 초록색이된다**)
9. `git commit -m '첫번 째 커밋'` (커밋 버전생성을 뜻함, -m(이런-를 플래그라고함))(새로운 파일이 컴퓨터에서 생기면 다시 그 파일만 빨간색이 된다)
10. `git branch -M main`
11. `git remote add origin 레포주소`
12. `git push -u origin main`

- commit: 저지르다, 무엇을 맡기다
- origin: 원격저장소의 별칭
- add: 추가
- remote: 원격저장소를 연결

13. `git log`: 커밋 내역 확인

### 프로젝트 생성 후 보통사용하는 cli

1. `git status`
2. `git add .`
3. `git commit -m "message"`
4. `git log` : commmit들 볼 수 있다.
   (Head > main 브랜치 확인도 가능)
5. `

## github Repository

1. 홈페이지 > repository > new로 새로운 repo 생성

- public 일반, private 회사 비공개
- add 관련 파일 설명하자

2. 레포 생성후 깃헙주소 복사

- `git remote add origin https://github.com/깃헙아이디/레포이름.git`
  - remote: 원격(깃헙서버에 저장소와 연결을 뜻함)
  - origin: 깃헙저장소에 origin이라는 이름으로 등록한다는 뜻.(가능하면 바꾸지 말자)

3. push를 하면 깃헙권한 허용을 위한 팝업이 뜰 것이다. vscode에서 뜨거나 따로 github관련해서 뜨고 웹페이지로 넘어가서 권한 수락과 성공이 나온다(깃헙에 이미 로그인되어있으면)
4. 하고 나서 그 레포에서 페이지 새로고침시 제대로 자료가 올라간 것을 볼 수 있다

## Branch / Merge (협업)

1. `branch`(나뭇가지)를 통해 공통프로젝트를 관리
   A 사람: 로그인 개발
   B 사람: 사용자 페이지 개발
   C 사람: 커피 홍보 페이지 개발
   같은 프로젝트에 서로 component별로 개발을 하고 나중에 하나로 합치는 과정

### branch cli

- [참고](https://medium.com/@joongwon/git-git-%EB%AA%85%EB%A0%B9%EC%96%B4-%EC%A0%95%EB%A6%AC-c25b421ecdbd)

1. `git branch`: local 브랜치들 리스트
2. `git branch -r`: remote 브랜치들 리스트
3. `git branch -a`: local, remote 브랜치들 포함 리스트
4. `git branch 브랜치명(ex.signin)`: branch 생성
5. `git checkout signin`: main에서 signin 브랜치로 이동
6. `git checkout -b 새로운브랜치`: 현재 브랜치에서 새로운 브랜치 생성하고 체크아웃하기
7. `git checkout 새로운브랜치 브랜치를 생성할 위치`:
8. github에서 브랜치들 확인하기
9. github에서 pull request 확인
   패캠강의 09.pull request 참고

10. `merge`(병합)

### clone

1. github 사이트에서 주소를 복사 후
2. `git clone 주소`

### reset

실제 프로젝트에서는 사용을 주의하자

1. 예를 들어 commit들을 계속 했는데 전걸로 돌리고 싶으면
2. `git reset --hard HEAD~1`

- `--hard`: 빡세게 reset 의미
- `HEAD~1`: head로 버전 1개 되돌리겠다

3. `git log`: 재차 확인하자 HEAD->main 가리키는 지도 보자
4. `git reset --hard ORIG_HEAD`: 위에 1개를 리셋했는데 다시 리셋 이전 상태로 돌려서 예를 들어 3으로 돌아간다.
5. `git reset --hard HEAD~2`: 다시 원하는 2개 리셋 상태로 코드를 칠 수 있다.

push까지 했는데 되돌릴 수 있나?

## 협업

1. 팀원 각자 팀레포 주소 복사
2. `git clone https://github.com/wudqo89/MGS8Collabo.git`
3. 해당 프로젝트 폴더(디렉토리)로 들어가서 `code . -r`(현재 vscode창에서 프로젝트 오픈된다)
4. `git branch`: local에 있는 branch 확인 (clone하면 main만 가져온다.)

   만약 회사 프로젝트에서 내 담당이 아닌 branch를 가져올 필요가 없을 수도 있기 때문에 main만 가져오g도록 되어있다.

5. `git branch -r`: remote에 있는 branch 리스트(HEAD는 main branch를 가리킨다.)
6. `git checkout -t origin/branch명` (vscode 왼쪽 하단에 branch명 확인)
   처음 clone만 하면 main branch만 있는데 이걸 치면 원하는 branch 가져온다
   - `-t`는 브랜치를 추척하는 upstream을 만듬
   - [--track검색](https://git-scm.com/docs/git-branch)
7. `git branch`: local branch 다시 확인
8. `git checkout main`> `git branch -d branch명`: main으로 가서 해당 branch 삭제
9. `git checkout -b branch명`: 생성과 동시에 이동
10. `git push origin branch명`
11. github에서 내 branch 확인
12. compare&pullrequest 버튼 클릭

13. 모르면 git branch 부분 영상 다시보기

## 깃 에러(블로그용)

- https://rrecoder.tistory.com/99

## 할일

git windows 설치시 용어들 설명
토이프로젝트 netlify는 나중에 다시보자~(github pages와 다른점?)
나중에 공통깃헙에서 토이프로젝트 한거
보인 깃헙을 가져가서 netlify에 연결시켜서 본인 커스텀 프로젝트로 변환도 추천
