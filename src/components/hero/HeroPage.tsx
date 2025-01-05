"use client";
import React from "react";
import { HeroParallax } from "../ui/hero-parallax";
import { products } from "./data";

const HeroPage = () => {
  return <HeroParallax products={products} />;
};

export default HeroPage;
