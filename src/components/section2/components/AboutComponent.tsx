"use client";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

import { TextComponent } from "./TextComponent";

export const AboutComponent = ({ data: data }: { data: any[] }) => {
  const [featureOpen, setFeatureOpen] = useState<number>(0);
  const [timer, setTimer] = useState<number>(0);
  const [timerActive, setTimerActive] = useState<boolean>(true);

  useEffect(() => {
    if (!timerActive) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev + 10);
    }, 10);
    return () => clearInterval(interval);
  }, [timerActive]);
  useEffect(() => {
    if (timer > 20000) {
      setFeatureOpen((prev) => (prev + 1) % data.length);
      setTimer(0);
    }
  }, [timer]);
  const handleMouseEnter = (index: number) => {
    if (featureOpen === index) {
      setTimerActive(false);
    }
  };

  const handleMouseLeave = (index: number) => {
    if (featureOpen === index) {
      setTimerActive(true);
    }
  };
  return (
    <div className="container">
      <div className="mb-20 text-center">
        <h1 className="text-4xl font-bold text-center text-white">About Me</h1>
      </div>
      <div className=" grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-6 ">
          {data.map((item, index) => (
            <button
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              className="w-full"
              key={item.title}
              onClick={() => {
                setFeatureOpen(index);
                setTimer(0);
              }}
              type="button"
            >
              <TextComponent
                content={item.content}
                isOpen={featureOpen === index}
                loadingWidthPercent={featureOpen === index ? timer / 200 : 0}
                number={index + 1}
                title={item.title}
              />
            </button>
          ))}
        </div>
        <div className="h-full">
          <div
            className={cn(
              "relative h-96 w-full overflow-hidden rounded-lg md:h-[500px]"
            )}
          >
            {data.map((item, index) => (
              <img
                alt={item.title}
                className={cn(
                  "absolute h-auto w-full rounded-lg object-cover transform-gpu  transition-all duration-300",
                  featureOpen === index ? "scale-100" : "scale-70",
                  featureOpen > index ? "translate-y-full" : ""
                )}
                key={item.title}
                src={item.srcImage}
                style={{ zIndex: data.length - index }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
