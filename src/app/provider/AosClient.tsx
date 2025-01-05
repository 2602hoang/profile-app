"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AosClient: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    return () => {
      AOS.refresh();
    };
  }, []);

  return <>{children}</>;
};

export default AosClient;
