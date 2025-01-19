/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-auto place-items-center py-32  px-4 sm:px-6 lg:px-8   rounded-2xl shadow-2xl shadow-[#f4f1f1] ">
      <div className="motion-translate-x-in-[200%] motion-translate-y-in-[0%] ">
        <div className="text-center">
          <h1 className="text-4xl pt-4  font-bold  motion-preset-stretch motion-duration-700 ">
            HI THERE ✌️
          </h1>
          <h1 className="text-yellow-300 text-xl md:text-4xl  motion-preset-stretch  ">
            👨🏻‍💻 My name is Hoang
          </h1>
        </div>
        <div className=" mt-5  dark:bg-[#121212]   p-5 h-auto  font-mono relative rounded-2xl shadow-yellow-200 shadow-2xl">
          <div className="shine">FRONT-END DEVELOPER</div>
          <div className="text-sm py-2 font-mono ">
            <div className=" font-bold max-w-2xl ">
              <br />
              <div className="flex items-center justify-center gap-2"></div>
              <br />
              <p className=" max-w-96">
                ⭐️ I am a Front-End Developer passionate about crafting
                visually stunning websites and mobile apps that not only look
                beautiful but also offer robust functionality.
                <br />
                <br /> ⭐️ I thrive on creating smooth user experiences,
                leveraging my creativity to inject a bit of excitement into
                every project.
              </p>
              <button className="hover:scale-110 mt-6 hover:border-[#3eade9] cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-[#209978] bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-50 transition font-semibold shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  height="24px"
                  width="24px"
                >
                  <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    id="SVGRepo_tracerCarrier"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g id="Interface / Download">
                      {" "}
                      <path
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2"
                        stroke="#f1f1f1"
                        d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                        id="Vector"
                      ></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
                My Profile
                <p className="absolute  w-full opacity-0 -bottom-full rounded-md py-2 px-2 bg-[#3eade9] bg-opacity-70 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity shadow-lg">
                  View & Download
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="hover:motion-preset-flomoji-👍 hover:cursor-grabbing mt-10 md:mt-0  motion-translate-x-in-[-200%] motion-translate-y-in-[0%] ">
        <div className="container0  md:max-w-[400px] w-64 pt-20 md:pt-0 h-auto ">
          <Image
            src="/me9.png"
            className="svg-icon object-cover max-w-52 max-h-max rounded-lg"
            alt="me"
            width={400}
            height={400}
          />
          <div className="container__star ">
            <div className="star-eight md:size-64 md:before:size-64 size-32 before:size-32 bg-[#2b323c] before:bg-[#2b323c] "></div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
