## Publisher Guide
#### created at 2023-01-18
---
### 개요
- 본 문서는 퍼블리셔 분의 원활한 프로젝트 참여를 위하여 생성되었습니다.  

### 커리큘럼
---
- (1) Git, Github
  - 팀원 간의 프로젝트 협업을 위하여 Git을 사용하며, Git 호스팅을 위하여 Github를 사용합니다.
  - Branch Strategy (브랜치 전략)
    - 프로젝트 진행에 있어 작업물 구분을 위하여 브랜치 전략을 구성하여 작업합니다. 
      - 일반적으로 `backend`, `frontend`로 큰 단위로 구분하여 진행합니다.
      - Publishing에 관련된 제작물 (파일)은 `frontend`  브랜치를 이용하여 관리합니다.
        - html, css, js 파일 작업이 완료되면 완료된 파일을 stage에 올립니다. (`git add [filename]`)
        - 커밋을 수행합니다. (`git commit -m "commit message"`)
        - 브랜치에 반영합니다. (`git push origin frontend`)
        - 위 과정이 수행되면, commit 이력을 통하여 파일 버전 관리가 가능합니다.
  - 프로젝트 통합(`branch merge`)은 프로젝트 담당자가 진행합니다.   
  - <b>추천 서적</b>
      - 팀 개발을 위한 Git, Github 시작하기 [링크 이동](http://www.yes24.com/Product/Goods/85382769)  

- (2) Zeplin
  - 디자이너-퍼블리셔, 디자이너-개발자 간 작업물을 바탕으로 원활하게 소통할 수 있도록 도와주는 툴로서 Zeplin을 사용합니다.
  - Zeplin 링크 (https://zeplin.io/)
  - 계정 정보
    - (Google 로그인) 
      - ID: meketiar@gmail.com
      - PW: MKzhsjt4500

- (3) Github와 Zeplin에 친숙해지기
  - Zeplin 접속 후 로그인하여 `안마베드 WEB` 프로젝트를 통하여 제플린의 인터페이스 및 사용 방안을 익히는 것이 좋습니다.
  - `안마베드 WEB` 프로젝트의 가이드를 보고 `페이지 작업`을 수행해 보세요.

- (4) 프로젝트 폴더 구성
  - Publishing 파일의 폴더 구성은 다음과 같이 구성하여 작업합니다.
  ```bash
  [Root Folder]
  ㅣ-- README.md
  ㅣ-- index.html 
  ㅣ-- ···.html
  ㅣ-- static
      ㅣ-- css
      ㅣ-- js
      ㅣ-- img
      ㅣ-- fonts
  ```

- (5) 웹표준(Web Standards) 익히기 
  - 웹 표준은 다양한 브라우저에 호환이 가능하도록 페이지를 구현하기 위한 기술이나 규칙을 의미합니다.
  - 웹 표준을 지키는 것은 HTML, CSS, JavaScript 등 웹사이트 제작에 사용되는 언어들의 표준과 가이드라인을 따르는 것을 의미합니다.
    - <b>자료</b> 
      - W3C 접근성 기준 [링크](https://www.w3.org/WAI/standards-guidelines/ko)
      - HTML Style Guide [링크](https://www.w3schools.com/html/html5_syntax.asp)


- (6) 코딩 컨벤션 (Coding Convention)
  - 효율적이고 일관적이며 프로젝트 간 통일된 마크업 개발을 위하여 코딩 컨벤션을 학습합니다.
    - <b>자료</b>
      - NHN Coding Convenvtion [링크](https://nuli.navercorp.com/data/convention/NHN_Coding_Conventions_for_Markup_Languages.pdf)
