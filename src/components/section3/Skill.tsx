/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { skillsData, softSkills } from "./data";
import { CarouselCylindricalVariant1 } from "./components/CarouselSkills";

const Skill = () => {
  return (
    <div className="flex  gap-5 rounded-2xl shadow-2xl shadow-[#f4f1f1] p-10 md:min-h-[80vh] flex-col items-center justify-between w-full max-w-screen-xl text-white">
      <div className="w-full py-20">
        <h1 className="text-4xl font-bold text-center ">SKILLS ABOUT ME</h1>
        <div className="flex flex-col gap-10 pt-10 justify-between">
          <div className="flex flex-wrap gap-4 md:px-28 items-center justify-center">
            <h3 className="text-xl ">Programming Skills</h3>

            <CarouselCylindricalVariant1 listItem={skillsData} />
          </div>

          <div className="flex flex-wrap gap-4 md:px-28 items-center justify-center">
            <h3 className="text-xl  mt-5">Soft Skills</h3>

            <CarouselCylindricalVariant1 listItem={softSkills} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
