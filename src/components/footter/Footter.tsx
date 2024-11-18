/* eslint-disable @next/next/no-img-element */
import React from "react";

import { Word } from "./components/Word";
import ContactMe from "./components/ContactMe";

const Footter = () => {
  return (
    <footer className="bg-[#121212] text-white border-2 overflow-hidden ">
      <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row  lg:justify-between pt-5 items-center justify-center ">
          <div className="motion-translate-x-in-[-200%] motion-translate-y-in-[0%] motion-preset-flomoji-🚀">
            <Word />
          </div>

          <ContactMe />
          <div className=" motion-translate-x-in-[200%] motion-translate-y-in-[0%] ">
            {/* <h1 className="pb-5 font-black uppercase text-center">About Me</h1> */}
            <div className="flex justify-center text-teal-600 lg:justify-start motion-preset-flomoji-👀  pt-6 ">
              <img
                src="/AVATA2.JPG"
                alt="Profile picture"
                className=" object-cover rounded-2xl md:w-44 lg:w-60  "
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="mt-12 text-center text-sm text-gray-500 pb-3 motion-preset-stretch ">
          Copyright &copy; 2024 by Hoang Vu. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footter;
