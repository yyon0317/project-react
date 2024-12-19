import React from "react";//리액트 라이브러리를 불러오기
import { BrowserRouter, Route, Routes } from "react-router-dom";//React Router의 **BrowserRouter**가 URL을 감지하고 Routes 내에서 일치하는 **Route**를 찾음.

import HomeView from "./views/HomeView";//./views/HomeView 파일에서 가져온 이 컴포넌트는 / 경로로 접속했을 때 렌더

const App = () => {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomeView />} />
        </Routes>
    </BrowserRouter>
    );
};
//App이라는 이름의 컴포넌트 대문자로 시작해야 React가 컴포넌트로 인식

export default App;
//컴포넌트 내보내기