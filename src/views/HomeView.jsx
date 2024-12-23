import React from "react";
import Header from "../components/Header";
import Aside from "../components/Aside";
import Intro from "../components/Intro";
import Skill from "../components/Skill";
import Site from "../components/Site";
import Career from "../components/Career";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Skip from "../components/Skip";
import Main from "../components/Main";

const HomeView = () => {
    return (
    <>
        <Skip />
        <Header />
        <Aside />
        <Main>
            <Intro />
            <Skill />
            <Site />
            <Career />
            <Contact />
        </Main>
        <Footer />
    </>
    );
};

export default HomeView;