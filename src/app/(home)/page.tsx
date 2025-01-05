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
import HeroPage from "@/components/hero/HeroPage";
import clsx from "clsx";
import { useScrollPosition } from "@/hooks/useWindownSize";
import { useMouse } from "@/hooks/useMouse";
import { Box } from "@/components/ui/box";

export default function App() {
  const { sectionName, scrollToTop, toggleTheme } = useLogic();
  const check = useScrollPosition(20);
  const [mouse, parentRef] = useMouse();

  const translate3d = `translate3d(${mouse.elementX}px, ${mouse.elementY}px, 0)`;
  return (
    <div
      className="relative h-full w-full  overflow-hidden"
      ref={parentRef as React.LegacyRef<HTMLDivElement>}
    >
      <div
        className="-top-3 -left-3 z-50 pointer-events-none absolute size-6 rounded-full border border-neutral-500/20 bg-red-500"
        style={{
          transform: translate3d,
        }}
      />
      <Box
        display={"flex"}
        flexDirection={"column"}
        overflow={"hidden"}
        className="min-h-screen w-full font-mono"
      >
        <ProgressBar />
        <div
          className={clsx(
            "fixed  top-0 left-0 right-0  border-b  shadow-2xl z-40 ",
            check ? "bg-black" : "bg-transparent"
          )}
        >
          <Header toggleTheme={toggleTheme} sectionName={sectionName} />
        </div>
        <div data-aos="zoom-in-down" className=" h-fit ">
          <HeroPage />
        </div>
        <div className="max-w-screen-xl mx-auto px-4 relative">
          <div
            data-aos="zoom-in-down"
            id="home"
            className="  md:h-screen pt-28 "
          >
            <Home />
          </div>

          <div
            data-aos="zoom-in-down"
            id="about"
            className="md:h-screen pt-28   "
          >
            <About />
          </div>
          <div data-aos="zoom-in-down" id="skill" className="md:h-screen pt-28">
            <Skill />
          </div>
        </div>

        <div
          data-aos="zoom-in-down"
          id="project"
          className="md:h-screen pt-28 pb-3 overflow-hidden"
        >
          <Project />
        </div>
        <div
          data-aos="zoom-in-down"
          id="contact"
          className=" pt-36  w-full grid "
        >
          <Contact />
        </div>
        <button
          data-aos="flip-right"
          id="backToTop"
          className=" bg-orange-400 text-black  back-to-top hover:bg-gray-400"
          onClick={scrollToTop}
        >
          ↑
        </button>
        <Footter />
      </Box>
    </div>
  );
}
