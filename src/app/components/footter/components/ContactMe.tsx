import React, { ReactNode } from "react";
import clsx from "clsx";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { headerData } from "@/components/header/data";

type IconInfo = {
  Icon: ReactNode;
  tooltip: string;
  color?: string;
  link?: string;
};

const icons: IconInfo[] = [
  {
    Icon: <FaFacebook />,
    tooltip: "My Facebook",
    color: "text-blue-600",
    link: "https://www.facebook.com/VHH26022001",
  },
  {
    Icon: <FaGithub />,
    tooltip: "My Github",
    color: "text-gray-600",
    link: "https://github.com/2602hoang",
  },
  {
    Icon: <FaGoogle />,
    tooltip: "My Gmail",
    color: "text-red-600",
    link: "mailto:vuhuyhoangboj@gmail.com",
  },
  {
    Icon: <FaTiktok />,
    tooltip: "My Tiktok",
    color: "text-gray-600",
    link: "https://www.tiktok.com/@hwhwhwhwhw33",
  },
  {
    Icon: <FaLinkedin />,
    tooltip: "My Linkedin",
    color: "text-blue-600",
    link: "/",
  },
  {
    Icon: <FaYoutube />,
    tooltip: "My Youtube",
    color: "text-red-600",
    link: "https://www.youtube.com/watch?v=u4234HpFlek",
  },
];

// Tooltip component to show icons with tooltips
const IconWithTooltip: React.FC<IconInfo> = ({ Icon, tooltip, color }) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <div className={clsx("text-4xl", color)}>{Icon}</div>
    </TooltipTrigger>
    {tooltip && (
      <TooltipContent
        side="bottom"
        className="bg-white text-black p-2 rounded-md shadow-md"
      >
        <p>{tooltip}</p>
      </TooltipContent>
    )}
  </Tooltip>
);

// ContactMe Component
const ContactMe = () => {
  return (
    <div className="flex flex-col motion-translate-x-in-[0%] motion-translate-y-in-[-200%] modalv1">
      <div className="hover:motion-preset-flomoji-👉 motion-duration-700 bg-">
        <h3 className="pb-5 font-black uppercase"> 📞 Contact Me</h3>
        <a
          href="tel:+84917789964"
          className="hover:underline hover:motion-preset-confetti"
        >
          Phone: +84 917.789.964
        </a>
        <p>Email: vuhuyhoangboj@gmail.com</p>
        <p className="pb-10">Address: Viet Nam</p>
        <h3 className="pb-5 font-black uppercase">🌏 My Social Networks</h3>
      </div>
      <div className="flex gap-x-5 text-4xl pb-10">
        <TooltipProvider>
          <div className="flex space-x-4">
            {icons.map(({ Icon, tooltip, color, link }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:motion-preset-confetti"
              >
                <IconWithTooltip Icon={Icon} tooltip={tooltip} color={color} />
              </a>
            ))}
          </div>
        </TooltipProvider>
      </div>
      <div className="">
        <ul className="flex flex-wrap justify-center gap-3 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
          {headerData.map((item) => (
            <li key={item.key}>
              <a
                className={clsx(
                  "hover:motion-preset-confetti transition hover:text-gray-500/75 text-md text-gray-500 hover:text-teal-600 hover:font-bold hover:underline"
                )}
                href={`#${item.href}`}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactMe;
