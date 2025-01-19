import { Key } from "react";

export interface ItemProject {
  key: Key;
  title?: string;
  description?: object;
  git?: string;
  demo?: string;
  image?: string;
}

export const ItemProject: ItemProject[] = [
  // {
  //   key: 1,
  //   title: "Quick Hands & Sharp Eyes",
  // description: {
  //   1: "👉 The game was developed by Hoang Dev in 2 days November 16-17, 2024.\n",
  //   2: "👉 The technology used is ReactJS. \n",
  //   3: "👉 The technology used is Vercel.\n",
  //   4: "👉 The technology used is TailwindCSS.\n",
  //   5: "👉 Develop websites according to available web templates using ReactJS + tailwindcss + antDesign + TypeScript technology.",
  // },
  //   git: "https://github.com/2602hoang/entrancetest-haibazo",
  //   demo: "https://entrancetest-haibazo.vercel.app/",
  //   image: "./gameQ2S.png",
  // },
  {
    key: 2,
    title: "Quick Hands & Sharp Eyes",
    description: {
      1: "👉 The game was developed by Hoang Dev in 2 days November 16-17, 2024.\n",
      2: "👉 The technology used is ReactJS. \n",
      3: "👉 The technology used is Vercel.\n",
      4: "👉 The technology used is TailwindCSS.\n",
      5: "👉 Develop websites according to available web templates using ReactJS + tailwindcss + antDesign + TypeScript technology.",
    },
    image: "/gameQ2S.png",
  },
  {
    key: 3,
    title: "Project 3",
    description: {},
    image: "/admin.png",
  },
  {
    key: 4,
    title: "Project 4",
    description: {},
    image: "/bookstore.png",
  },
  {
    key: 5,
    title: "Project 5",
    description: {},
    image: "/nextjs.png",
  },
  {
    key: 6,
    title: "Project 6",
    description: {},
    image: "/blogger.png",
  },
];
