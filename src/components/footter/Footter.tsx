/* eslint-disable @next/next/no-img-element */
import React from "react";

import { Word } from "./components/Word";
import ContactMe from "./components/ContactMe";
import Image from "next/image";

const Footter = () => {
  return (
    <footer
      data-aos="zoom-in-down"
      className="  border-2 overflow-hidden  bg-black text-white"
    >
      <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row  lg:justify-between pt-5 items-center justify-center ">
          <div
            data-aos="flip-right"
            className="motion-translate-x-in-[-200%] motion-translate-y-in-[0%] motion-preset-flomoji-🚀"
          >
            <Word />
          </div>
          <div data-aos="flip-up">
            <ContactMe />
          </div>
          <div
            data-aos="flip-left"
            className=" motion-translate-x-in-[200%] motion-translate-y-in-[0%] "
          >
            <div className="flex justify-center text-teal-600 lg:justify-start motion-preset-flomoji-👀  pt-6 ">
              <Image
                src="/AVATA2.jpg"
                alt="Profile picture"
                className=" object-cover rounded-2xl "
                height={164}
                width={240}
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
