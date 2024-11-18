"use client";
import Header from "@/components/header/Header";
import Home from "@/components/section1/Home";
import { About } from "@/components/section2/About";
import Skill from "@/components/section3/Skill";
import Project from "@/components/section4/Project";
import Contact from "@/components/section5/Contact";
import React from "react";
import { useLogic } from "./useLogic";
import Footter from "@/components/footter/Footter";

export default function App() {
  const { sectionName } = useLogic();
  return (
    <div className="min-h-screen w-full font-mono bg-[#1E1E1E]">
      <div className="fixed bg-[#121212] top-0 left-0 right-0 shadow-2xl z-50 ">
        <Header sectionName={sectionName} />
      </div>
      <div className=" text-white  max-w-screen-xl mx-auto px-4 pt-24">
        <div id="home" className=" min-h-screen   pb-3  md:h-screen ">
          <Home />
        </div>
        <div id="about" className="md:h-screen min-h-screen   ">
          <About />
        </div>
        <div id="skill" className="md:h-screen min-h-screen">
          <Skill />
        </div>
        <div id="project" className="md:h-screen min-h-screen">
          <Project />
        </div>
        <div id="contact" className="md:h-screen min-h-screen">
          <Contact />
        </div>
      </div>
      <Footter />
    </div>
  );
}
