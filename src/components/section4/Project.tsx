import React from "react";
import Marquee from "../ui/marquee";
import ReviewCard from "./components/ReviewCard";
import { ItemProject } from "./data";

const Project = () => {
  return (
    <div className="  grid place-items-center gap-4 p-5  md:min-h-[80vh] w-full ">
      <div className=" flex justify-center flex-col w-full">
        <Marquee pauseOnHover className="[--duration:20s]">
          {ItemProject.map((review, index) => (
            <ReviewCard {...review} key={index} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </div>
  );
};

export default Project;
