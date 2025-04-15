import React, { useEffect, useRef } from "react";
import about from "../assets/img/about.jpg";
//import 이미지 처리

import { keyword } from "../constants";

const Skill = () => {
    const skillContainerRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counters = skillContainerRef.current.querySelectorAll(".counter");

          counters.forEach((counter) => {
            counter.innerText = "0";

            const updateCounter = () => {
              const target = +counter.getAttribute("data-target");
              const current = +counter.innerText;

              const increment = target / 300;

              if (current < target) {
                counter.innerText = `${Math.ceil(current + increment)}`;
                setTimeout(updateCounter, 50);
              } else {
                counter.innerText = target;
              }
            };

            updateCounter();
          });

          // 옵저버 해제 (한 번만 실행)
          observer.disconnect();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null, // 뷰포트를 기준으로 감지
      threshold: 0.5, // 요소가 50% 이상 보일 때 트리거
    });

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);
  
    return (
      <section id="about" ref={aboutRef}>
        <h2 className="tit">ABOUTME</h2>
        <div className="skill__inner" ref={skillContainerRef}>
          <div className="ability">
            <div className="con1">
              <div className="aboutimg">
                <img src={about} alt="어바웃" />
                <div className="name">{keyword.name}</div>
                <div className="keyword">
                  {keyword.desc.map((desc, index) => (
                    <span key={index}>{desc}</span>
                  ))}
                </div>
              </div>
              <div className="abouttext">
                <div className="title">{keyword.title}</div>
                <div className="text">
                  {keyword.text.map((text, index) => (
                    <span key={index}>
                      {text}
                      <br />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul className="skill_cont" ref={skillContainerRef}>
          <li className="skill_wrap">
            <div className="skill_desc">
              <p className="counter" data-target="95"></p>
              <em>HTML</em>
            </div>
          </li>
          <li className="skill_wrap">
            <div className="skill_desc">
              <p className="counter" data-target="95"></p>
              <em>CSS/SASS</em>
            </div>
          </li>
          <li className="skill_wrap">
            <div className="skill_desc">
              <p className="counter" data-target="70"></p>
              <em>JAVASCRIPT</em>
            </div>
          </li>
          <li className="skill_wrap">
            <div className="skill_desc">
              <p className="counter" data-target="50"></p>
              <em>REACT</em>
            </div>
          </li>
        </ul>
      </section>
    );
  };
  
  export default Skill;