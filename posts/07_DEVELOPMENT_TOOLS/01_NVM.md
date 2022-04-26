# NVM

**Node.js Version Manager**
기존에 Node.js 사이트에서 다운로드 받아서 설치해야 했는데 NVM을 통해 명령어로 쉽게 처리할 수 있다.

### install

- [NVM](https://github.com/coreybutler/nvm-windows)
- nvm-setup.zip 파일을 받아서 install하자

### CLI

- version: `nvm --version`
- installed Node.js : `nvm ls`
- install new Node.js: `nvm install xx.xx.xx` (version 기입)
- use: `nvm use xx.xx.xx` (version 기입)
  - 에러 발생시 powershell 관리자 권한에서 실행
- delete Node.js: `nvm uninstall xx.xx.xx`
  - (에러 발생시 powershell 관리자 권한에서 실행)
