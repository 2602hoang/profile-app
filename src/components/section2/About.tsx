import React from "react";
import { AboutComponent } from "./components/AboutComponent";
import { data } from "./data";

export const About = () => {
  return (
    <div className="flex bg-[#121212] gap-5  rounded-2xl shadow-2xl shadow-[#f4f1f1] md:flex-row  p-10 md:min-h-[80vh] flex-col items-start justify-between w-full max-w-screen-xl ">
      <div className="w-full ">
        <AboutComponent data={data} />
      </div>
    </div>
  );
};
