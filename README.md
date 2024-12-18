React를 활용한 youtube 코딩

# 프로젝트 소개

이 프로젝트는 React를 활용하여 YouTube의 주요 기능을 클론한 웹 애플리케이션입니다.
사용자는 동영상을 검색하고, 선택하여 상세 정보를 확인할 수 있으며, 동영상 목록을 탐색할 수 있습니다.

## youtube를 클론 코딩 주제로 선택한 이유

YouTube는 전 세계적으로 가장 인기 있는 동영상 공유 플랫폼 중 하나로, 다양한 기능과 복잡한 구조를 가지고 있습니다.
이러한 이유로 YouTube를 클론 코딩 주제로 선택함으로써 다음과 같은 이점을 얻을 수 있습니다:

1. **실제 서비스와 유사한 기능 구현**: YouTube의 주요 기능을 클론함으로써 실제 서비스와 유사한 기능을 구현해볼 수 있습니다.
이를 통해 실무에서 필요한 기술과 경험을 쌓을 수 있습니다.

2. **다양한 기술 스택 활용**: YouTube 클론 코딩 프로젝트는 React, Zustand, React Router, Axios, YouTube Data API 등 다양한 기술 스택을 활용합니다.
이를 통해 다양한 기술을 익히고, 프로젝트에 적용하는 방법을 배울 수 있었습니다.

3. **UI/UX 개선 경험**: YouTube의 UI/UX를 분석하고, 이를 클론하면서 개선할 수 있는 부분을 찾아 적용해볼 수 있습니다.
이를 통해 사용자 경험을 향상시키는 방법을 배울 수 있었습니다.

4. **문제 해결 능력 향상**: YouTube 클론 코딩 프로젝트를 진행하면서 발생하는 다양한 문제를 해결하는 과정을 통해 문제 해결 능력을 향상시킬 수 있습니다.


## 주요 기능

- **검색 기능**: 사용자가 키워드를 입력하여 관련 동영상을 검색할 수 있습니다.
- **동영상 목록**: 검색 결과에 따라 동영상 목록을 표시합니다.
- **동영상 상세 보기**: 사용자가 특정 동영상을 선택하면 상세 정보를 확인할 수 있습니다.
- **반응형 디자인**: 다양한 디바이스에서 최적의 사용자 경험을 제공합니다.

## 설치 방법

 // Start of Selection
1. 저장소를 클론합니다:

   ```bash
   git clone https://github.com/God-Hyun/react-youtubeProject.git
   ```

2. 필요한 패키지를 설치합니다:

   ```bash
   cd youtube-clone
   yarn install
   ```

3. 개발 서버를 시작합니다:

   ```bash
   yarn start
   ```

## 사용 기술

- **React**: 사용자 인터페이스 구축을 위한 JavaScript 라이브러리입니다. 컴포넌트 기반 아키텍처를 통해 재사용 가능한 UI 컴포넌트를 쉽게 만들 수 있습니다.
- **Zustand**: 간단하고 직관적인 상태 관리 라이브러리입니다. React의 상태 관리를 쉽게 할 수 있도록 도와줍니다.
- **React Router**: 클라이언트 사이드 라우팅을 위한 라이브러리입니다. SPA(Single Page Application)에서 페이지 간 이동을 쉽게 구현할 수 있습니다.
- **Axios**: HTTP 요청을 처리하기 위한 라이브러리입니다. API와의 통신을 쉽게 할 수 있도록 도와줍니다.
- **YouTube Data API**: YouTube의 동영상 데이터를 가져오기 위한 API입니다. 검색, 동영상 정보 조회 등의 기능을 제공합니다.
- **react-icons**: 다양한 아이콘을 React 컴포넌트로 사용할 수 있게 해주는 라이브러리입니다. FontAwesome, Material Design 등 다양한 아이콘 세트를 제공합니다.

## 프로젝트 구조

### 주요 파일 및 디렉토리

- `src/components/Header.jsx`: 헤더 컴포넌트로, 로그인/로그아웃 버튼과 검색 바를 포함합니다.
- `src/components/Header.css`: 헤더 컴포넌트의 스타일을 정의합니다.
- `src/components/VideoGrid.jsx`: 동영상 목록을 그리드 형태로 표시하는 컴포넌트입니다.
- `src/components/VideoGrid.css`: 동영상 그리드의 스타일을 정의합니다.
- `src/components/Login.jsx`: 로그인 모달 컴포넌트입니다.
- `src/components/Login.css`: 로그인 모달의 스타일을 정의합니다.
- `src/store.js`: Zustand를 사용한 상태 관리 로직을 포함합니다.
- `src/api/youtube.jsx`: YouTube API와의 통신을 처리하는 파일입니다.
- `src/pages/Home.jsx`: 홈 페이지 컴포넌트로, 추천 동영상을 표시합니다.
- `src/pages/SearchResults.jsx`: 검색 결과 페이지 컴포넌트로, 검색된 동영상을 표시합니다.
- `src/App.jsx`: 애플리케이션의 루트 컴포넌트입니다.
- `src/router.js`: 라우팅 설정을 포함합니다.

## 기여 방법

기여를 환영합니다! 버그 보고나 기능 요청은 이슈를 통해, 또는 풀 리퀘스트를 제출해 주세요.

## 라이선스

이 프로젝트는 [MIT 라이선스](LICENSE)를 따릅니다.
