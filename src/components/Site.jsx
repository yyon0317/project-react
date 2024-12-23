import React, { useEffect, useRef } from "react";
import port01 from "../assets/img/port01.jpg";
import port02 from "../assets/img/port02.jpg";
import port03 from "../assets/img/port03.jpg";
import port04 from "../assets/img/port04.jpg";

const Site = () => {
  const siteRef = useRef(null);
  const projectsRef = useRef([]);

  useEffect(() => {
    const getSectionPoint = () => {
      const site = siteRef.current;
      const sections = projectsRef.current;
      const scrollTop = document.documentElement.scrollTop;

      if (site) {
        sections.forEach((section, index) => {
          const offsetTop = section.offsetTop;
          const offsetBottom = offsetTop + section.offsetHeight;
          const margin = 250; // margin-bottom equivalent

          if (scrollTop + margin >= offsetTop && scrollTop <= offsetBottom) {
            sections.forEach((sec) => sec.classList.remove("active"));
            section.classList.add("active");
          } else {
            section.classList.remove("active");
          }
        });
      }
    };

    window.addEventListener("scroll", getSectionPoint);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", getSectionPoint);
    };
  }, []);

  return (
    <section id="site" ref={siteRef}>
      <div className="site__inner">
        <h2 className="tit">PUBLISHINGPROJECT</h2>
        {[
          {
            num: "01",
            img: port01,
            title: "독도 재단,독도(기여도100%)",
            skill:["HTML5","CSS3","JAVA SCRIPT","JQUERY"],
            desc: "태그의 의미와 구조를 이해하고 반응형으로 제작한 사이트로 PC, TABLET. MOBILE 로 구성 되어 있습니다. @keyframes 애니매이션을 활용하고 j-query 이벤트 사용해서 동적인 홈페이지를 구축했습니다.",
            link: "/webstandard/index.html",
          },
          {
            num: "02",
            img: port02,
            title: "CASSINA(기여도100%)",
            skill:["HTML5","CSS3","JAVA SCRIPT","JQUERY"],
            desc: "	디자인시안부터 반응형으로 제작한 사이트로 PC, TABLET. MOBILE 로 구성 되어 있습니다. SASS에서의 @mixin/@include변수를 활용하고 flex&grid로 레이아웃 디자인했습니다.디자인 컨셉은 갤러리 느낌을 주기 위해 모션을 활용한 UI를 구현하기 위해 다양한 Scroll Event을 사용하였습니다.",
            link: "/webresponsive/index.html",
          },
          {
            num: "03",
            img: port03,
            title: "Megabox Web Site",
            skill:["HTML5","CSS3","JAVA SCRIPT","JQUERY"],
            desc: "기업사이트 메가박스를 벤치마킹하여 제작한 반응형 웹사이트입니다.",
            link: "/megabox/index.html",
          },
          {
            num: "04",
            img: port04,
            title: "Fursys Web Site",
            skill:["HTML5","CSS3","JAVA SCRIPT","JQUERY"],
            desc: "기획,디자인,퍼블리싱까지 100% 개인작업으로 이루어진 웹사이트입니다.",
            link: "http://godzezea.dothome.co.kr/",
          },
        ].map((project, index) => (
          <article
            className="project"
            key={index}
            ref={(el) => (projectsRef.current[index] = el)}
          >
            <h3 className="num">{project.num}</h3>
            <div className="pro_cont">
              <figure>
                <img src={project.img} alt={project.title} />
              </figure>
              <div className="pro_desc">
                <div>
                  <h4>{project.title}</h4>
                  <p>
                    <span>{project.skill[0]} </span>
                    <span>{project.skill[1]} </span>
                    <span>{project.skill[2]} </span>
                    <span>{project.skill[3]} </span>
                  </p>
                  <p>{project.desc}</p>
                </div>
                <a href={project.link} className="more">
                  VIEW SITE
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Site;
