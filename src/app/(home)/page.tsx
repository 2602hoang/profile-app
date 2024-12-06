"use client";

import React from "react";
import { useLogic } from "./useLogic";
import ProgressBar from "../../components/progressBar/ProgressBar";
import Header from "../../components/header/Header";
import { About } from "../../components/section2/About";
import Skill from "../../components/section3/Skill";
import Project from "../../components/section4/Project";
import Contact from "../../components/section5/Contact";
import Home from "../../components/section1/Home";
import Footter from "../../components/footter/Footter";

export default function App() {
  const { sectionName, scrollToTop, toggleTheme } = useLogic();
  return (
    <div className="min-h-screen w-full font-mono overflow-hidden ">
      <ProgressBar />
      <div className="fixed  top-0 left-0 right-0 bg-white dark:bg-black border-b  shadow-2xl z-40  ">
        <Header toggleTheme={toggleTheme} sectionName={sectionName} />
      </div>
      <div className="   max-w-screen-xl mx-auto px-4 ">
        <div id="home" className=" min-h-screen   pb-3  md:h-screen pt-28">
          <Home />
        </div>
        <div id="about" className="md:h-screen min-h-screen pt-28   ">
          <About />
        </div>
        <div id="skill" className="md:h-screen min-h-screen pt-28">
          <Skill />
        </div>
        <div id="project" className="md:h-screen min-h-screen pt-28">
          <Project />
        </div>
        <div id="contact" className="md:h-screen min-h-screen pt-28">
          <Contact />
        </div>
      </div>
      <button
        id="backToTop"
        className="dark:bg-white dark:text-black bg-black text-white back-to-top"
        onClick={scrollToTop}
      >
        ↑
      </button>
      <Footter />
    </div>
  );
}
