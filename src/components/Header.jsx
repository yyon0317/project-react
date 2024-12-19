import React, { useState } from "react";

const headerNav = [
    { title: "intro", url: "#intro" },
    { title: "skill", url: "#skill" },
    { title: "site", url: "#site" },
    { title: "portfolio", url: "#port" },
    { title: "contact", url: "#contact" }
];


const Header = () => {

    const [show, setShow] = useState(false);
    //show는 상태 값이며, setShow는 상태를 변경하는 함수
    //show라는 상태 변수를 생성하고 useState 훅으로 초기값을 false로 설정합니다. 이 변수는 모바일 메뉴의 표시 여부를 관리합니다. show가 true이면 모바일 메뉴가 나타나고, false이면 숨겨집니다.
    const toggleMenu = () => {
        setShow((prevShow) => !prevShow);
    }
    //toggleMenu라는 함수를 정의합니다. 이 함수는 모바일 메뉴를 표시하거나 숨기기 위해 show 상태를 변경하는 역할을 합니다. setShow 함수를 사용하여 show 상태를 업데이트

    return (
        <header id="header" role="banner">
            <div className="header__inner">
                <div className="header__logo">
                    <h1>
                        <a href="/">portfolio<em>react.js</em></a>
                    </h1>
                </div>
                <nav 
                    className={`header__nav ${show ? "active" : ""}`} 
                    role="navigation" 
                    aria-label="메인메뉴"
                >
                    <ul>
                        {headerNav.map((nav, key) => (
                            <li key={key}>
                                <a href={nav.url}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div 
                    className="header__nav__mobile" 
                    id="headerToggle" 
                    aria-controls="primary-menu" 
                    aria-expanded={show ? "true" : "false"} 
                    role="button"
                    tabIndex="0"
                    onClick={toggleMenu}
                >
                    <span></span>
                </div>
            </div>
        </header>
    )
}

export default Header;