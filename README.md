# 포트폴리오 사이트 만들기 프로젝트

이 튜토리얼은 하나의 웹사이트를 여러 가지 프레임워크를 사용하여 만드는 방법에 대해 소개합니다. 
웹 개발자들은 종종 다양한 프레임워크를 이용하여 작업하게 됩니다. 
이 과정에서 여러 가지 프레임워크들을 어떻게 적용하는지 알아보고, 
각 프레임워크들의 장단점을 비교 분석하며 학습하게 됩니다.

1. [vite](https://github.com/webstoryboy/port2023-vite)를 이용하여 사이트를 제작합니다. 
2. [react.js](https://github.com/webstoryboy/port2023-react)를 이용하여 사이트를 제작합니다. 


## 완성작 보기 
미리보기 : 

## 사용 스택
- react(https://ko.legacy.reactjs.org/) 를 사용하여 사이트를 번들링하고 관리합니다.
- gsap(https://greensock.com/gsap) 를 이용하여 패럴랙스 효과를 줍니다.
- lenis(https://lenis.studiofreight.com/) 를 이용하여 스므스 효과를 구현합니다.
- netlify(https://www.netlify.com/) 를 통해 사이트를 배포합니다.
- git(https://github.com/) 을 사용하여 파일을 관리합니다.
- HTML, CSS 기반으로 웹사이트의 기본 레이아웃 설계하고, 웹 표준 및 웹 접근성을 준수하여 작업합니다. [ARIA(Accessible Rich Internet Applications)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)

## 프로젝트 실행
- react를 설치합니다. `npx create-react-app 폴더이름(타이틀)` 
- react-router-dom을 설치합니다. `npm install react-router-dom`(리액트 애플리케이션에서 라우팅 기능을 제공하는 패키지입니다. 라우팅은 다른 페이지로의 이동과 URL에 따른 컴포넌트의 표시를 관리하는 기능을 말합니다. react-router-dom은 주로 웹 애플리케이션에서 사용되며, 여러 경로를 정의하고 각 경로에 해당하는 컴포넌트를 렌더링하도록 도와줍니다.)
- sass를 설치합니다. `npm install sass`
- gsap를 설치합니다. `npm install gsap`(웹 애니메이션을 구현하기 위한 JavaScript 라이브러리입니다. GSAP은 풍부한 기능을 제공하며, 웹 요소들의 애니메이션을 부드럽고 효과적으로 제어할 수 있습니다. 웹 애니메이션과 트윈(Tween) 기능)
- lenis를 설치합니다. `npm install @studio-freight/lenis`(스무스 효과를 주기 위한 파일)


























npx create-react-app project-react 
npx는 Node.js와 함께 제공되는 패키지 실행  create-react-app이라는 패키지를 다운로드 project-react 폴더 생성

cd project-react
npm start





node_modules: 이 폴더는 프로젝트에서 사용하는 외부 라이브러리와 모듈들이 저장되는 곳입니다. 이 폴더는 개발자가 직접 생성하지 않고, 프로젝트에 필요한 패키지들을 자동으로 설치했을 때 생성됩니다. 일반적으로 npm 또는 yarn과 같은 패키지 매니저를 통해 필요한 패키지들을 설치하면 자동으로 생성됩니다.
public: 이 폴더는 웹 애플리케이션의 루트(root) 폴더입니다. 여기에 있는 파일들은 브라우저에서 직접 접근 가능합니다. 이 폴더에는 주로 HTML 파일, 이미지 파일, 파비콘(favicon)과 같은 리소스 파일들이 위치합니다.
favicon.svg: 파비콘(favicon)은 웹사이트의 탭에 표시되는 작은 아이콘을 의미합니다. 일반적으로 이 파일은 웹사이트를 대표하는 아이콘이나 로고 이미지를 담고 있습니다.
index.html: 이 파일은 리액트 애플리케이션의 진입점(entry point)이 되는 HTML 파일입니다. 웹 브라우저가 이 파일을 로드하면, 리액트 애플리케이션의 컴포넌트들이 렌더링되는 루트(root) 요소를 지정합니다.
src: 소스 코드를 포함하는 폴더로, 리액트 애플리케이션의 주요 코드가 이곳에 위치합니다. 주로 컴포넌트들, 스타일 시트, 그리고 기타 자바스크립트 파일들이 이 폴더에 저장됩니다.
assets: 리액트 애플리케이션에서 사용되는 정적 파일들을 저장하는 폴더입니다. 주로 이미지, 폰트, 그래픽 등이 이곳에 위치합니다.
App.js: 이 파일은 리액트 애플리케이션의 최상위 컴포넌트인 'App' 컴포넌트를 정의하는 파일입니다. 애플리케이션의 다른 컴포넌트들은 이 'App' 컴포넌트 내부에 렌더링되거나 포함될 수 있습니다.
index.js: 이 파일은 리액트 애플리케이션의 다른 컴포넌트들을 실제 DOM에 렌더링하는 역할을 합니다. 주로 'ReactDOM.render()' 메서드를 통해 'App' 컴포넌트를 실제 DOM에 마운트(mount)합니다.
.gitignore: Git 버전 관리에서 무시해야 하는 파일과 폴더들을 지정하는 파일입니다. 보통 'node_modules' 폴더와 빌드 결과물 등은 버전 관리에서 제외하고 싶은 경우 이 파일에 명시합니다.
package-lock.json: Node.js 프로젝트에서 사용되는 패키지의 의존성을 관리하는 파일입니다. 패키지들 간의 의존성과 버전 정보가 기록되어 있어, 다른 환경에서 프로젝트를 다시 설치하거나 빌드할 때 일관성을 유지하는 데 도움을 줍니다.
package.json: 프로젝트의 메타 정보와 의존성을 정의하는 파일입니다. 프로젝트의 이름, 버전, 필요한 패키지들, 스크립트 등이 이 파일에 기록됩니다.
README.md: 프로젝트에 대한 설명을 담고 있는 Markdown 형식의 파일입니다. 주로 프로젝트의 목적, 사용 방법, 라이선스 정보 등을 기술합니다.



---------------------------------------------------------------------------------------------





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

