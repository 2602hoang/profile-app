/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import clsx from "clsx";
import { headerData } from "./data";
import { ModeToggleTheme } from "./components/ModeToggle";

interface Prop {
  sectionName: string;
  toggleTheme: () => void;
}
const Header: React.FC<Prop> = ({ sectionName, toggleTheme }) => {
  return (
    <header className="py-2  aniheader ">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12  ">
            <a
              className="block text-teal-600 hover:motion-preset-flomoji-👍"
              href="/"
            >
              <span className="sr-only">Home</span>
              <img
                src="/me1.png"
                alt="Profile picture"
                className="size-16 object-cover rounded-full "
              />
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-lg">
                {headerData.map((item) => (
                  <li key={item.key}>
                    <a
                      className={clsx(
                        " transition hover:text-gray-500/75 text-gray-500 hover:motion-preset-confetti",
                        {
                          "text-teal-600 font-bold ":
                            sectionName.trim() === item.href,
                        }
                      )}
                      href={`${item.href}`}
                    >
                      {item.icon} {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="hidden md:relative md:block ">
              <ModeToggleTheme toggleTheme={toggleTheme} />
            </div>

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
