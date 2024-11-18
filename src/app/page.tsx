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
    <div className="min-h-screen w-full font-mono">
      <div className="fixed bg-[#121212] top-0 left-0 right-0 shadow-2xl z-50 ">
        <Header sectionName={sectionName} />
      </div>
      <div className="bg-[#1E1E1E]">
        <div
          id="home"
          className=" min-h-screen  pt-24 pb-3 px-4 md:h-screen overflow-hidden"
        >
          <Home />
        </div>
        <div
          id="about"
          className="flex justify-center items-center  md:h-screen min-h-screen"
        >
          <About />
        </div>
        <div
          id="skill"
          className="flex justify-center items-center min-h-screen  h-screen"
        >
          <Skill />
        </div>
        <div
          id="project"
          className="flex justify-center items-center min-h-screen  h-screen"
        >
          <Project />
        </div>
        <div
          id="contact"
          className="flex  justify-center items-center min-h-screen  h-screen"
        >
          <Contact />
        </div>
      </div>
      <Footter />
    </div>
  );
}
