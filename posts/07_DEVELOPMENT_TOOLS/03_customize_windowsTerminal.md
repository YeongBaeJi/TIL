# Customize Window terminal

**Windows 환경에서 멋있는 Terminal 환경을 만들어보자**

**중간 중간에 설치를 하거나 설정을 변경하면 Terminal을 '재실행'하자**

## Ready

2019년에 처음 출시된 Windows Terminal을 설치한다. (Mac OS의 터미널 만큼이나 멋있게 만들어졌다.)
Powershell은 Windows 10 자체에 내장 되어있는 것을 사용해도 되지만 MS Store에서 상위 버전을 다운로드하여 사용해보자.

- [Windows Terminal](https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701?hl=ko-kr&gl=KR)
- [PowerShell](https://www.microsoft.com/ko-kr/p/powershell/9mz1snwt0n5d?activetab=pivot:overviewtab)

## Settings - 1

1. Terminal을 클릭 > 상단 `∨` 버튼 클릭 > 설정 클릭 (또는 `Ctrl + ,`로 설정 페이지에 들어간다.)
2. 왼쪽 상단 바 > 시작 > 기본 프로필 > 내가 원하는 terminal을 선택 (나는 새버전 Powershell을 선택)
3. 왼쪽 상단 바 > JSON 파일 열기 > 아래 코드 > `PowershellCore`가 있는 Powershell이 담긴 객체를 `list` 상위에 올려놓자.

```
"list":
        [
            {
                "font":
                {
                    "face": "RobotoMono Nerd Font Mono"
                },
                "guid": "{574e775e-4f2a-5b96-ac1e-a2962a402336}",
                "hidden": false,
                "name": "PowerShell",
                "source": "Windows.Terminal.PowershellCore"
            },
            {
                "commandline": "%SystemRoot%\\System32\\WindowsPowerShell\\v1.0\\powershell.exe",
                "font":
                {
                    "face": "RobotoMono Nerd Font Mono"
                },
                "guid": "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}",
                "hidden": false,
                "name": "Windows PowerShell"
            },
            ...
        ]
```

## Setting - 2

Oh My Posh is a custom prompt engine for any shell that has the ability to adjust the prompt string with a function or variable.

위 글은 이번에 설치할 Oh-my-posh이다. Terminal의 theme 설정을 할 수 있고 그 외 기능들이 있다.

- [Oh-my-posh](https://ohmyposh.dev/docs/installation/windows)

### Oh my posh - install

1. `winget install oh-my-posh`을 터미널에 입력. 경고 메시지가 나오면 Yes all (A)를 입력하자.
2. Theme 적용

- `notepad $PROFILE`로 theme 설정을 저장할 파일을 만들고 저장한다. (처음만들면 경고창이 나올 것이다.)
  - 이 파일은 내문서>powershell 폴더에 저장된다.
- `oh-my-posh init pwsh --config 'https://raw.githubusercontent.com/JanDeDobbeleer/oh-my-posh/main/themes/microverse-power.omp.json' | Invoke-Expression`
  - 나는 `microverse-power` theme을 설정했지만 원하는 것을 고르고 그 부분을 바꾸면 된다.
  - [Themes](https://ohmyposh.dev/docs/themes)

### Nerd fonts

1. 'Oh my posh'의 Theme을 통해 아이콘들이 보여지는데 이때 font가 'Nerd font'가 아니면 텍스트아이콘이 깨진다. 그래서 'Nerd font'를 다운로드 하자.
2. 원하는 것을 다운로드 후에 압축을 풀고 오른쪽 클릭 install을 하거나 아니면 제어판>글꼴에 파일을 드래그하여 옮겨서 설치해도 된다. ttf 글꼴을 설치하도록 하자.
3. 아까 Terminal 설정 창에 들어가 왼쪽 사이드 바에 내가 원하는 Powershell을 클릭하고 오른쪽에서 스크롤을 내려가보면 추가 설정 > 모양을 확인할 수 있다. 거기서 글꼴을 다운로드 한 'Nerd font'로 바꾸자

- [Nerd font](https://www.nerdfonts.com/font-downloads)
- [RobotoMono Nerd font-추천](https://www.programmingfonts.org/#roboto)

## Setting - 3 (그 외 추가 기능)

#### PSReadLine

예를 들어 `git status`를 치기 위해 `git s`만 쳐도 필요한 리스트들을 보여주고 쉽게 선택할 수 있다. 타이핑하는 스트레스를 줄여준다.
아래 링크를 들어가 설치한다. beta버전보다는 `2.2.2`버전을 설치하자.

- `Install-Module -Name PSReadLine -RequiredVersion 2.2.2` 터미널에 입력한다. 만약 '관리자 권한' 때문에 오류가 발생하면 `Install-Module -Name PSReadLine -RequiredVersion 2.2.2 -Scope CurrentUser`로 입력하자
- [PSReadLine](https://www.powershellgallery.com/packages/PSReadLine/2.2.2)

#### Terminal-Icons

Terminal창에서 `ls`or`dir` 명령어로 디렉토리 하위에 파일들을 보여줄 때 해당하는 아이콘들을 보여준다. 꼭 필요하지 않지만 원하면 설치하자.

- `Install-Module -Name Terminal-Icons` or `Install-Module -Name Terminal-Icons -Scope CurrentUser`로 설치하자
- [Terminal-Icons](https://www.powershellgallery.com/packages/Terminal-Icons/0.9.0)

#### Posh-git

Git 관련한 명령어들을 제공하는 기능이다.

- `Install-Module oh-my-posh -Scope CurrentUser`
- [Posh-git](https://www.powershellgallery.com/packages/posh-git/1.0.0)

## Powershell에서 `touch` 명령어 설정

`notepad $profile`를 입력 후 파일 안에 함수 코드를 기입한다. `. $profile` 이후 Terminal 재실행하면 명령어 사용이 가능하다.

```
function touch {
  Param(
    [Parameter(Mandatory=$true)]
    [string]$Path
  )

  if (Test-Path -LiteralPath $Path) {
    (Get-Item -Path $Path).LastWriteTime = Get-Date
  } else {
    New-Item -Type File -Path $Path
  }
}
```

- [stackoverflow](https://stackoverflow.com/questions/32448174/creating-new-file-with-touch-command-in-powershell-error-message)

## 그 외

아까 `notepad $profile`을 통해서 만든 파일에 `Set-PSReadLineOption`들을 추가하자.

```
oh-my-posh init pwsh --config 'https://raw.githubusercontent.com/JanDeDobbeleer/oh-my-posh/main/themes/microverse-power.omp.json' | Invoke-Expression

Set-PSReadLineOption -PredictionSource History
Set-PSReadLineOption -PredictionViewStyle ListView
Set-PSReadLineOption -EditMode Windows
```

---

#### 참고 자료

- [Daniel Laera](https://www.youtube.com/watch?v=TY_YKz1uvws)
- [Apedu](https://blog.apedu.co/how-to-customize-the-windows-terminal-modify-powershell-or-terminalor-cmd-or-posh-git-or-oh-my-posh)
- [Apedu2](https://www.youtube.com/watch?v=2VHNpA_7sHA)
- [ohmyposh-windows](https://docs.microsoft.com/ko-kr/windows/terminal/tutorials/custom-prompt-setup)
