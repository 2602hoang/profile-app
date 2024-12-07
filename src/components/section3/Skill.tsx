/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { skillsCode, softSkills } from "./data";
import { CarouselCylindricalVariant1 } from "./components/CarouselSkills";

const Skill = () => {
  return (
    <div className="flex bg-[#121212] gap-5 rounded-2xl shadow-2xl shadow-[#f4f1f1] p-10 md:min-h-[80vh] flex-col items-center justify-between w-full max-w-screen-xl ">
      <div className="w-full py-20">
        <h1 className="text-4xl font-bold text-center text-white">
          SKILLS ABOUT ME
        </h1>
        <div className="flex flex-col gap-10 pt-10 justify-between">
          <div className="flex flex-wrap gap-4 md:px-28 items-center justify-center">
            <h3 className="text-xl text-white">Programming Skills</h3>

            <CarouselCylindricalVariant1 listItem={skillsCode} />
          </div>

          <div className="flex flex-wrap gap-4 md:px-28 items-center justify-center">
            <h3 className="text-xl text-white mt-5">Soft Skills</h3>

            <CarouselCylindricalVariant1 listItem={softSkills} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
