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
export const skillsCode: {
  name1: string;
  color: string;
  icon: React.ReactNode;
}[] = [
  { name1: "HTML", color: "#E34F26", icon: <FaHtml5 /> },
  { name1: "CSS/SCSS", color: "#264DE4", icon: <FaCss3Alt /> },
  { name1: "JavaScript", color: "#F7DF1E", icon: <FaJsSquare /> },
  { name1: "TypeScript", color: "#007ACC", icon: <SiTypescript /> },
  { name1: "NextJS", color: "#000000", icon: <SiNextdotjs /> },
  {
    name1: "ReactJS",
    color: "#61DBFB",
    icon: (
      <p className="flex flex-col   items-center gap-2">
        <FaReact />
        <span className="text-[6px]"> ReactJS</span>
      </p>
    ),
  },
  {
    name1: "React Query",
    color: "#61DBFB",
    icon: (
      <p className="flex flex-col  items-center gap-2">
        <SiReactquery />
        <span className="text-[6px]"> ReactQuery</span>
      </p>
    ),
  },
  {
    name1: "ReactNative",
    color: "#61DBFB",
    icon: (
      <p className="flex flex-col   items-center gap-2">
        <FaReact />
        <span className="text-[6px]"> ReactNative</span>
      </p>
    ),
  },
  { name1: "TailwindCSS", color: "#38B2AC", icon: <SiTailwindcss /> },
  { name1: "NodeJS", color: "#68A063", icon: <FaNodeJs /> },
  { name1: "Express", color: "#000000", icon: <SiExpress /> },
  { name1: "MongoDB", color: "#4DB33D", icon: <SiMongodb /> },
  { name1: "MySQL", color: "#00758F", icon: <SiMysql /> },
  { name1: "Git", color: "#F05032", icon: <FaGitAlt /> },
  { name1: "Vercel", color: "#000000", icon: <SiVercel /> },
  { name1: "AntDesign", color: "#0170FE", icon: <SiAntdesign /> },
  { name1: "Shadcn/ui", color: "#000000", icon: <SiShadcnui /> },
];

export const softSkills: {
  name: string;
  color: string;
  icon: React.ReactNode;
}[] = [
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
];
