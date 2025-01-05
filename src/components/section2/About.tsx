import React from "react";
import { AboutComponent } from "./components/AboutComponent";
import { data } from "./data";

export const About = () => {
  return (
    <div className="sectionLayout">
      <div className="w-full ">
        <AboutComponent data={data} />
      </div>
    </div>
  );
};
