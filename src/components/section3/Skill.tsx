/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaLightbulb,
  FaClock,
  FaUsers,
  FaGraduationCap,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiAntdesign,
  SiVercel,
  SiReactquery,
  SiShadcnui,
} from "react-icons/si";

const Skill = () => {
  const skillsCode: { name: string; color: string; icon: React.ReactNode }[] = [
    { name: "HTML", color: "#E34F26", icon: <FaHtml5 /> },
    { name: "CSS/SCSS", color: "#264DE4", icon: <FaCss3Alt /> },
    { name: "JavaScript", color: "#F7DF1E", icon: <FaJsSquare /> },
    { name: "TypeScript", color: "#007ACC", icon: <SiTypescript /> },
    { name: "NextJS", color: "#000000", icon: <SiNextdotjs /> },
    { name: "ReactJS", color: "#61DBFB", icon: <FaReact /> },
    { name: "React Query", color: "#61DBFB", icon: <SiReactquery /> },
    { name: "ReactNative", color: "#61DBFB", icon: <FaReact /> },
    { name: "TailwindCSS", color: "#38B2AC", icon: <SiTailwindcss /> },
    { name: "NodeJS", color: "#68A063", icon: <FaNodeJs /> },
    { name: "Express", color: "#000000", icon: <SiExpress /> },
    { name: "MongoDB", color: "#4DB33D", icon: <SiMongodb /> },
    { name: "MySQL", color: "#00758F", icon: <SiMysql /> },
    { name: "Git", color: "#F05032", icon: <FaGitAlt /> },
    { name: "Vercel", color: "#000000", icon: <SiVercel /> },
    { name: "AntDesign", color: "#0170FE", icon: <SiAntdesign /> },
    { name: "Shadcn/ui", color: "#000000", icon: <SiShadcnui /> },
  ];

  const softSkills: { name: string; color: string; icon: React.ReactNode }[] = [
    {
      name: "Inquisitive progressive",
      color: "#FFD700",
      icon: <FaLightbulb />,
    },
    { name: "Work under pressure", color: "#F4A300", icon: <FaClock /> },
    { name: "Teamwork", color: "#2F855A", icon: <FaUsers /> },
    {
      name: "Ability to adapt quickly",
      color: "#E53E3E",
      icon: <FaGraduationCap />,
    },
    { name: "Quick acquisition", color: "#FF6347", icon: <FaLightbulb /> },
    {
      name: "Inquisitive, progressive",
      color: "#FFD700",
      icon: <FaLightbulb />,
    },
  ];

  return (
    <div className="flex bg-[#121212] gap-5 rounded-2xl shadow-2xl shadow-[#f4f1f1] md:flex-row p-10 md:min-h-[80vh] flex-col items-start justify-between w-full max-w-screen-xl ">
      <div className="w-full ">
        <h1 className="text-4xl font-bold text-center text-white">
          SKILLS ABOUT ME
        </h1>
        <h3 className="text-xl text-white">Programming Skills</h3>
        <div className="flex flex-wrap gap-4">
          {skillsCode.map((skill, index) => (
            <div
              style={{ backgroundColor: skill.color }}
              key={index}
              className="flex p-3 rounded-3xl items-center gap-2  text-white"
            >
              <p className="flex items-center gap-2 min-w-32">
                <span
                  style={{ backgroundColor: skill.color }}
                  className="p-2 rounded-full border border-white  text-white"
                >
                  {skill.icon}
                </span>
                {skill.name}
              </p>
            </div>
          ))}
        </div>
        <h3 className="text-xl text-white mt-5">Soft Skills</h3>
        <div className="flex flex-wrap gap-4">
          {softSkills.map((skill, index) => (
            <div
              style={{ backgroundColor: skill.color }}
              key={index}
              className="flex  p-3 rounded-3xl items-center gap-2 text-white"
            >
              <span
                style={{ backgroundColor: skill.color }}
                className="p-2 rounded-full text-white"
              >
                {skill.icon}
              </span>
              <p>
                {skill.name} {"//"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
