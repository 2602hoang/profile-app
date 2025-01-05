import React from "react";
import Marquee from "../ui/marquee";
import ReviewCard from "./components/ReviewCard";
import { ItemProject } from "./data";

const Project = () => {
  // const firstRow = ItemProject.slice(0, ItemProject.length / 2);
  // const secondRow = ItemProject.slice(ItemProject.length / 2);
  return (
    <div className="  grid place-items-center gap-4 p-5 rounded-2xl shadow-2xl shadow-[#f4f1f1] md:min-h-[80vh] w-full ">
      <h1 className="text-4xl font-bold text-center text-white">PROJECTS</h1>
      <div className=" flex justify-center w-full">
        <Marquee pauseOnHover className="[--duration:20s]">
          {ItemProject.map((review, index) => (
            <ReviewCard {...review} key={index} />
          ))}
        </Marquee>
        {/* <Marquee reverse pauseOnHover className="[--duration:20s]">
          {ItemProject.map((review, index) => (
            <ReviewCard {...review} key={index} />
          ))}
        </Marquee> */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </div>
  );
};

export default Project;
