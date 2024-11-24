"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const ProgressBar: React.FC = () => {
  const [scrollPercent, setScrollPercent] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const { theme } = useTheme();
  const handleScroll = () => {
    const windowH = window.innerHeight;
    const documentH = document.documentElement.scrollHeight;
    const scrollY = window.scrollY;
    const scrolled = (scrollY / (documentH - windowH)) * 100;
    setScrollPercent(scrolled);
  };
  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const progressBarStyle: React.CSSProperties = {
    height: windowWidth >= 768 ? "3px" : `${scrollPercent}%`,
    width: windowWidth >= 768 ? `${scrollPercent}%` : "4px",
    backgroundColor: theme === "dark" ? "#ffffcc" : "#ffffcc",
  };

  return (
    <div
      className="
      md:w-full md:h-[5px] md:items-center md:top-0 z-50 
      h-full w-1 fixed top-0 left-0 bottom-0"
    >
      <div style={progressBarStyle}></div>
    </div>
  );
};

export default ProgressBar;
