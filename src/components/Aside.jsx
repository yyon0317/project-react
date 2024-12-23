import React, { useEffect } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faSquarePhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Aside = () => {
    // section4 (header + snslist)
    const changeColor = () => {
        const site = document.getElementById('career');
        const snsIcons = document.getElementsByClassName('snsicon');

        if (site && snsIcons.length > 0) {
            
            const scrollTop = window.scrollY; // 현재 스크롤 위치
            const changeHeight = site.offsetTop + site.offsetHeight;

            // 모든 snsicon에 active 클래스 추가/제거
            Array.from(snsIcons).forEach((icon) => {
                if (scrollTop >= site.offsetTop && scrollTop <= changeHeight) {
                    icon.classList.add("active");
                } else {
                    icon.classList.remove("active");
                }
            });
        }
    };

    // Scroll 이벤트 리스너 추가 및 제거
    useEffect(() => {
        window.addEventListener("scroll", changeColor);
        return () => {
            window.removeEventListener("scroll", changeColor); // 컴포넌트 언마운트 시 리스너 제거
        };
    }, []);

    return (
        <aside id="sns">
            <div className="list">
                <ul>
                    <li>
                        <a href="https://github.com/yyon0317">
                            <FontAwesomeIcon className="snsicon" icon={faSquareGithub} size="1x" color="#fff"/>
                        </a>
                    </li>
                    <li>
                        <a href="tel:010-6356-0317">
                            <FontAwesomeIcon className="snsicon" icon={faSquarePhone} size="1x" color="#fff"/>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:yoon63560317@gmail.com">
                            <FontAwesomeIcon className="snsicon" icon={faEnvelope} size="1x" color="#fff"/>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Aside;
