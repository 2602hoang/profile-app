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

interface Skill {
  title: string;
  href: string;
  icon: React.ReactNode;
  color: string;
  description: string;
}
export const skillsData: Skill[] = [
  {
    title: "HTML",
    color: "#E34F26",
    icon: <FaHtml5 />,
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    description: "The standard markup language for creating web pages",
  },
  {
    title: "CSS/SCSS",
    color: "#264DE4",
    icon: <FaCss3Alt />,
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    description:
      "Style sheet language used for describing the presentation of a document",
  },
  {
    title: "JavaScript",
    color: "#F7DF1E",
    icon: <FaJsSquare />,
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    description: "High-level, interpreted programming language",
  },
  {
    title: "TypeScript",
    color: "#007ACC",
    icon: <SiTypescript />,
    href: "https://www.typescriptlang.org/",
    description:
      "Typed superset of JavaScript that compiles to plain JavaScript",
  },
  {
    title: "NextJS",
    color: "#000000",
    icon: <SiNextdotjs />,
    href: "https://nextjs.org/",
    description: "React framework for production-grade applications",
  },
  {
    title: "ReactJS",
    color: "#61DBFB",
    icon: <FaReact />,
    href: "https://react.dev/",
    description: "JavaScript library for building user interfaces",
  },
  {
    title: "React Query",
    color: "#61DBFB",
    icon: <SiReactquery />,
    href: "https://tanstack.com/query/v4/",
    description: "Powerful asynchronous state management for React",
  },
  {
    title: "ReactNative",
    color: "#61DBFB",
    icon: <FaReact />,
    href: "https://reactnative.dev/",
    description: "Framework for building native apps using React",
  },
  {
    title: "TailwindCSS",
    color: "#38B2AC",
    icon: <SiTailwindcss />,
    href: "https://tailwindcss.com/docs/installation",
    description: "Utility-first CSS framework for rapid UI development",
  },
  {
    title: "NodeJS",
    color: "#68A063",
    icon: <FaNodeJs />,
    href: "https://nodejs.org/docs/latest/api/",
    description: "JavaScript runtime built on Chrome's V8 JavaScript engine",
  },
  {
    title: "Express",
    color: "#000000",
    icon: <SiExpress />,
    href: "https://expressjs.com/en/starter/installing.html",
    description: "Fast, unopinionated, minimalist web framework for Node.js",
  },
  {
    title: "MongoDB",
    color: "#4DB33D",
    icon: <SiMongodb />,
    href: "https://www.mongodb.com/docs/manual/core/document/",
    description: "Document-oriented NoSQL database",
  },
  {
    title: "MySQL",
    color: "#00758F",
    icon: <SiMysql />,
    href: "https://dev.mysql.com/doc/",
    description: "Open-source relational database management system",
  },
  {
    title: "Git",
    color: "#F05032",
    icon: <FaGitAlt />,
    href: "https://git-scm.com/doc",
    description: "Distributed version control system",
  },
  {
    title: "Vercel",
    color: "#000000",
    icon: <SiVercel />,
    href: "https://vercel.com/guides/does-vercel-support-docker-deployments",
    description: "Cloud platform for static sites and Serverless Functions",
  },
  {
    title: "AntDesign",
    color: "#0170FE",
    icon: <SiAntdesign />,
    href: "https://ant.design/docs/react/getting-started",
    description: "A design system for enterprise-level products",
  },
  {
    title: "Shadcn/ui",
    color: "#000000",
    icon: <SiShadcnui />,
    href: "https://ui.shadcn.com/docs",
    description: "Re-usable components built using Radix UI and Tailwind CSS",
  },
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
