"use client";
import * as React from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";
export interface Prop {
  toggleTheme: () => void;
}
export const ModeToggleTheme: React.FC<Prop> = ({ toggleTheme }) => {
  const { theme } = useTheme();

  return (
    <div className="flex items-center justify-between w-full ">
      <div className="flex items-center">
        <button
          aria-label="Toggle bold"
          className="hover:motion-preset-confetti"
          onClick={() => {
            toggleTheme();
          }}
        >
          {theme === "light" ? (
            <SunIcon className="mr-2 h-4 w-4 text-yellow-600" />
          ) : (
            <MoonIcon className="mr-2 h-4 w-4 text-[#fff]" />
          )}
        </button>
      </div>
    </div>
  );
};
