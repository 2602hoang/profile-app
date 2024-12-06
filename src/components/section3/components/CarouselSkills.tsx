/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import clsx from "clsx";
import {
  type PanInfo,
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";

import { useEffect, useState } from "react";
export interface Prop {
  listItem: any[];
}
export const CarouselCylindricalVariant1 = ({ listItem }: Prop) => {
  const [isHovered, setIsHovered] = useState(false);
  const cylinderWidth = 1500;
  const faceCount = listItem.length;
  const faceWidth = cylinderWidth / faceCount;
  const dragFactor = 0.05;
  const radius = cylinderWidth / (2 * Math.PI);

  const rotation = useMotionValue(0);
  const controls = useAnimation();

  const handleDrag = (_: unknown, info: PanInfo) => {
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    controls.start({
      rotateY: rotation.get() + info.velocity.x * dragFactor,
      transition: { type: "spring", stiffness: 100, damping: 30, mass: 0.1 },
    });
  };

  const transform = useTransform(rotation, (value) => {
    return `rotate3d(0, 1, 0, ${value}deg)`;
  });

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (!isHovered) {
      interval = setInterval(() => {
        rotation.set(rotation.get() + 1);
      }, 30);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [rotation, isHovered]);

  return (
    <div className="relative h-[100px] w-full overflow-hidden">
      <div
        className="flex h-full items-center justify-center"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <motion.div
          animate={controls}
          className="relative flex h-full origin-center cursor-grab justify-center active:cursor-grabbing"
          drag="x"
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          style={{
            transform: transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
        >
          {listItem.map((item, index) => {
            return (
              <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                key={`face-${index}`}
                className="absolute flex h-full w-full origin-center items-center justify-center bg-mauve-dark-2 p-2"
                style={{
                  width: `${faceWidth}px`,
                  transform: `rotateY(${
                    index * (360 / faceCount)
                  }deg) translateZ(${radius}px)`,
                }}
              >
                <div
                  className={clsx(
                    // "group flex h-20 w-full items-center justify-center rounded-xl",
                    // "max-w-sm rounded-2xl border border-neutral-500/10 p-6 text-card-foreground dark:border-white/10 ",
                    // "dark:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]",
                    // "neutral group transition-transform hover:scale-110",
                    // "bg-neutral-100/90 dark:bg-neutral-800/90",
                    {
                      "bg-transparent dark:bg-transparent border-0 4":
                        !!item.name,
                    }
                  )}
                  style={{
                    backgroundColor: item.name ? item.color : undefined,
                    minWidth: item.name ? "200px" : undefined,
                  }}
                >
                  <div
                    style={{ backgroundColor: item.color }}
                    className="flex flex-col p-2 rounded-3xl items-center gap-2 text-white"
                  >
                    <div className="size-9 rounded-full flex justify-center items-center ">
                      {" "}
                      {item.icon}
                    </div>
                    {item.name && <div className="text-sm">{item.name}</div>}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};
