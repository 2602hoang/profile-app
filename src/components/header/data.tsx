import {
  HomeOutlined,
  InfoCircleOutlined,
  AppstoreAddOutlined,
  FolderOpenOutlined,
  MailOutlined,
} from "@ant-design/icons";

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
