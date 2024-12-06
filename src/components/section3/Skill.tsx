/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { skillsCode, softSkills } from "./data";
import { CarouselCylindricalVariant1 } from "./components/CarouselSkills";

const Skill = () => {
  return (
    <div className="flex bg-[#121212] gap-5 rounded-2xl shadow-2xl shadow-[#f4f1f1] md:flex-row p-10 md:min-h-[80vh] flex-col items-start justify-between w-full max-w-screen-xl ">
      <div className="w-full ">
        <h1 className="text-4xl font-bold text-center text-white">
          SKILLS ABOUT ME
        </h1>
        <h3 className="text-xl text-white">Programming Skills</h3>
        <div className="flex flex-wrap gap-4 md:px-28 items-center justify-center">
          <CarouselCylindricalVariant1 listItem={skillsCode} />
          {skillsCode.map((skill, index) => (
            <div
              style={{ backgroundColor: skill.color }}
              key={index}
              className="grid  place-items-center p-3 rounded-3xl  text-center gap-2  min-w-32 text-white"
            >
              {skill.name1}
            </div>
          ))}
        </div>
        <h3 className="text-xl text-white mt-5">Soft Skills</h3>
        <div className="flex flex-wrap gap-4 md:px-28 items-center justify-center">
          <CarouselCylindricalVariant1 listItem={softSkills} />
          {/* {softSkills.map((skill, index) => (
            <div
              style={{ backgroundColor: skill.color }}
              key={index}
              className="grid  place-items-center p-3 rounded-3xl  text-center gap-2  text-white"
            ></div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Skill;
