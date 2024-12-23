import React, { useEffect } from "react";
import gsap from "gsap";

import { introText } from "../constants";

const Intro = () => {
    useEffect(() => {
        // 애니메이션 설정
        const handleWindowLoad = () => {
          const elements = document.querySelectorAll(".split");
          elements.forEach((el) => {
            const text = el.textContent;
            const splitText = text.split("").join("</span><span aria-hidden='true'>");
            el.innerHTML = `<span aria-hidden='true'>${splitText}</span>`;
            el.setAttribute("aria-label", text);
          });
    
          // GSAP 애니메이션 실행
          gsap.to(".split span", {
            duration: 0.3,
            opacity: 1,
            y: 0,
            stagger: 0.1,
          });
        };
    
        // 윈도우 로드 시 실행
        window.addEventListener("load", handleWindowLoad);
    
        // 클린업
        return () => {
          window.removeEventListener("load", handleWindowLoad);
        };
      }, []);

    return (
        <section id="intro">
            <div className="intro__inner">
                <h2>
                  <span className="intro__title style01 split">{introText.title[0]}</span>
                  <span className="intro__title style02 split">{introText.title[1]}</span><br></br>
                  <span className="intro__title style01 split">{introText.title[2]}</span><br></br>
                  <span className="intro__title style02 split">{introText.title[3]}</span><br></br>
                </h2>
                <div className="intro__text">
                    <div className="text">
                        <div>{introText.desc[0]}</div>
                        <div>{introText.desc[1]}</div>
                        <div>{introText.desc[2]}</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;