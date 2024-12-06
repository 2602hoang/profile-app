import clsx from "clsx";
import { HomeIcon, UserIcon, Code, Folder, Mail } from "lucide-react";

export const headerData = [
  {
    key: 1,
    icon: <HomeIcon />,
    title: "Home",
    href: "home",
  },
  {
    key: 2,
    icon: <UserIcon />,
    title: "About",
    href: "about",
  },
  {
    key: 3,
    icon: <Code />,
    title: "Skill",
    href: "skill",
  },
  {
    key: 4,
    icon: <Folder />,
    title: "Project",
    href: "project",
  },
  {
    key: 5,
    icon: <Mail />,
    title: "Contact",
    href: "contact",
  },
];

export const ItemMenu = ({ sectionName }: { sectionName: string }) => {
  return (
    <ul className="flex md:flex-row md:items-center items-start gap-6 text-lg flex-col">
      {headerData.map((item) => (
        <li key={item.key} className="hover:motion-preset-confetti">
          <a
            className={clsx(
              "transition hover:text-gray-500/75 text-gray-500 flex gap-2  hover:cursor-pointer",
              {
                "text-teal-600 font-bold": sectionName.trim() === item.href,
              }
            )}
            href={`#${item.href}`}
          >
            {item.icon} {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
