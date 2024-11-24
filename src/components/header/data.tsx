import {
  HomeOutlined,
  InfoCircleOutlined,
  AppstoreAddOutlined,
  FolderOpenOutlined,
  MailOutlined,
} from "@ant-design/icons";
import clsx from "clsx";

export const headerData = [
  {
    key: 1,
    icon: <HomeOutlined />,
    title: "Home",
    href: "home",
  },
  {
    key: 2,
    icon: <InfoCircleOutlined />,
    title: "About",
    href: "about",
  },
  {
    key: 3,
    icon: <AppstoreAddOutlined />,
    title: "Skill",
    href: "skill",
  },
  {
    key: 4,
    icon: <FolderOpenOutlined />,
    title: "Project",
    href: "project",
  },
  {
    key: 5,
    icon: <MailOutlined />,
    title: "Contact",
    href: "contact",
  },
];

export const ItemMenu = ({ sectionName }: { sectionName: string }) => {
  return (
    <ul className="flex md:flex-row md:items-center items-start gap-6 text-lg flex-col">
      {headerData.map((item) => (
        <li key={item.key}>
          <a
            className={clsx(
              " transition hover:text-gray-500/75 text-gray-500 flex gap-2 hover:motion-preset-confetti",
              {
                "text-teal-600 font-bold ": sectionName.trim() === item.href,
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
