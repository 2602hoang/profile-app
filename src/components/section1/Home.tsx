"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Home = () => {
  return (
    <div className="flex items-center bg-[#333333]  py-14 rounded-2xl shadow-2xl shadow-[#f4f1f1] md:flex-row flex-col justify-between mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 font-sans   ">
      <div className="flex flex-col items-center justify-center">
        <div className="hover:motion-preset-flomoji-👍 hover:cursor-grabbing">
          <Avatar className="w-72 md:w-[400px] h-auto hover:motion-preset-seesaw rounded-none ">
            <AvatarImage
              src="/ava.png"
              className="object-cover bg-transparent"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h1 className="motion-preset-typewriter-[12] motion-duration-300 text-4xl pt-4 ml-5 md:ml-28 font-bold text-white ">
            HI THERE ✌️
          </h1>
          <h1 className="text-yellow-300 text-xl md:text-4xl motion-preset-typewriter-[18] shadow-white ">
            👨🏻‍💻 My name is Hoang
          </h1>
        </div>
      </div>

      <div className="macbook top-[50%] left-[50%] md:block hidden">
        <div className="inner">
          <div className="screen">
            <div className="face-one">
              <div className="camera"></div>
              <div className="display text-white">
                <div className="shade"></div>
                <h1 className="text-sm motion-preset-typewriter-[10] text-wrap">
                  Welcome to my Portfolio
                </h1>
              </div>
              <span>🇻🇳 🇻🇳 🇻🇳 🇻🇳</span>
            </div>
            <title>Hoang</title>
          </div>
          <div className="macbody">
            <div className="face-one">
              <div className="touchpad"></div>
              <div className="keyboard">
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key space"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key f"></div>
                <div className="key f"></div>
                <div className="key f"></div>
                <div className="key f"></div>
                <div className="key f"></div>
                <div className="key f"></div>
                <div className="key f"></div>
                <div className="key f"></div>
                <div className="key f"></div>
                <div className="key f"></div>
                <div className="key f"></div>
                <div className="key f"></div>
                <div className="key f"></div>
                <div className="key f"></div>
                <div className="key f"></div>
                <div className="key f"></div>
              </div>
            </div>
            <div className="pad one"></div>
            <div className="pad two"></div>
            <div className="pad three"></div>
            <div className="pad four"></div>
          </div>
        </div>
        <div className="shadow"></div>
      </div>
      <div className=" ">
        <div className=" font-bold text-white max-w-2xl ">
          <br />
          <div className="flex items-center justify-center gap-2"></div>
          <br />
          <p className="text-xl max-w-96">
            ⭐️ I am a Front-End Developer passionate about crafting visually
            stunning websites and mobile apps that not only look beautiful but
            also offer robust functionality .
            <br />
            <br /> ⭐️ I thrive on creating smooth user experiences, leveraging
            my creativity to inject a bit of excitement into every project .
          </p>
          <button className="hover:scale-110 mt-6 hover:border-[#3eade9] cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-[#209978] bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-50 transition font-semibold shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              height="24px"
              width="24px"
            >
              <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
              <g
                stroke-linejoin="round"
                stroke-linecap="round"
                id="SVGRepo_tracerCarrier"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g id="Interface / Download">
                  {" "}
                  <path
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="2"
                    stroke="#f1f1f1"
                    d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                    id="Vector"
                  ></path>{" "}
                </g>{" "}
              </g>
            </svg>
            My Profile
            <p className="absolute  w-full opacity-0 -bottom-full rounded-md py-2 px-2 bg-black bg-opacity-70 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity shadow-lg">
              View & Download
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
