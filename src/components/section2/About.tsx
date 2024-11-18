/* eslint-disable @next/next/no-img-element */
import React from "react";

export const About = () => {
  return (
    <div className="flex bg-[#333333] rounded-2xl shadow-2xl shadow-[#f4f1f1] md:flex-row  p-10 md:min-h-[80vh] flex-col items-center justify-center w-full max-w-screen-xl ">
      <div className="w-full  ">
        {/* <Avatar className="w-72 md:w-full h-auto hover:motion-preset-seesaw rounded-none "> */}
        <img
          src="/me1removebg1.png"
          alt="me"
          className="w-72 md:w-96 rounded-full shadow-inner hover:motion-preset-pulse-sm   shadow-black h-auto object-cover bg-transparent  "
        />
      </div>
      <div className="w-full border-2 h-[50vh]"></div>
    </div>
  );
};
