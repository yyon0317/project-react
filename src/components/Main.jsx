import React from "react";
//Main 컴포넌트는 자식 컴포넌트들을 렌더링하는 래퍼(wrapper) 역할
//Main 컴포넌트는 children prop을 받아와서 해당 자식 컴포넌트들을 <main> 태그로 감싸서 반환

const Main = ({ children }) => {
    return (
    <main id="main" role="main">
        {children}
    </main>
    );
};

export default Main;