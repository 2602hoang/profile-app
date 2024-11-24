/* eslint-disable @next/next/no-img-element */
"use client";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from "react";
import { ModeToggleTheme } from "./components/ModeToggle";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { MenuOutlined } from "@ant-design/icons";
import { ItemMenu } from "./data";

interface Prop {
  sectionName: string;
  toggleTheme: () => void;
}
const Header: React.FC<Prop> = ({ sectionName, toggleTheme }) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const closeSheet = () => setIsSheetOpen(false);
  return (
    <header className="py-2  aniheader ">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12  ">
            <a
              className="block text-teal-600 hover:motion-preset-flomoji-👍"
              href="/"
            >
              <img
                src="/me1.png"
                alt="Profile picture"
                className="object-cover rounded-full size-16"
              />
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ItemMenu sectionName={sectionName} />
            </nav>

            <div className="hidden md:relative md:block ">
              <ModeToggleTheme toggleTheme={toggleTheme} />
            </div>

            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger>
                <div className="block md:hidden">
                  <MenuOutlined className="" />
                </div>
              </SheetTrigger>
              <SheetContent className="w-full flex flex-col justify-center items-center">
                <div onClick={closeSheet}>
                  <ItemMenu sectionName={sectionName} />
                </div>
                <button onClick={closeSheet} className="">
                  <ModeToggleTheme toggleTheme={toggleTheme} />
                </button>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
