import React from "react";
import { CarouselProject } from "./components/CarouselProject";
import { ItemProject } from "./data";

const Project = () => {
  return (
    <div className=" bg-[#121212] grid place-items-center rounded-2xl shadow-2xl shadow-[#f4f1f1] md:min-h-[80vh] w-full max-w-screen-xl ">
      <h1 className="text-4xl font-bold text-center text-white">PROJECTS</h1>
      <div className="px-10">
        <CarouselProject listItems={ItemProject} />
      </div>
    </div>
  );
};

export default Project;
