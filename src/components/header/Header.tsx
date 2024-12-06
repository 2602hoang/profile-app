"use client";
import React, { useState } from "react";
import { ModeToggleTheme } from "./components/ModeToggle";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";

import { ItemMenu } from "./data";
import { MenuIcon } from "lucide-react";

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
          <div className="flex md:items-center md:gap-12 z-50 ">
            <a
              className="text-teal-600 hover:motion-preset-flomoji-👍 cursor-pointer"
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
              {/* <ThemeSwitcherButton toggleTheme={toggleTheme} /> */}
            </div>
            <div className="md:hidden relative block ">
              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger>
                  <div className="block md:hidden">
                    <MenuIcon aria-label="Open Menu" />
                  </div>
                </SheetTrigger>
                <SheetTitle></SheetTitle>
                <SheetContent
                  aria-describedby={undefined}
                  className="w-full flex flex-col justify-center items-center"
                >
                  <div onClick={closeSheet}>
                    <ItemMenu
                      aria-label="Open Menu"
                      sectionName={sectionName}
                    />
                  </div>
                  <div onClick={closeSheet}>
                    <ModeToggleTheme toggleTheme={toggleTheme} />
                    {/* <ThemeSwitcherButton toggleTheme={toggleTheme} /> */}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
