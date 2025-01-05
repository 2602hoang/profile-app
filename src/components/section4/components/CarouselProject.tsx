"use client";
import { Carousel, CarouselItem } from "@/components/ui/carousel";
import * as React from "react";
import { ItemProject } from "../data";

const CarouselProject = ({
  listItems: listItems,
}: {
  listItems: ItemProject[];
}) => {
  return (
    <Carousel className=" max-w-screen-xl w-full h-auto">
      {listItems.map((item) => (
        <CarouselItem
          key={item.key}
          className="flex md:flex-row flex-col w-full h-auto text-white gap-2"
        >
          <div className="w-1/4 justify-center">
            <img src={item.image} alt={item.image} className="w-full h-auto" />
          </div>
          <div className=" flex flex-col text-start w-full flex-wrap">
            <div>
              <h1 className="text-2xl font-bold">{item.title}</h1>
              {Object.values(item.description ?? {}).map((desc, index) => (
                <p className="flex flex-wrap break-words" key={index}>
                  {desc}
                </p>
              ))}
            </div>
          </div>
        </CarouselItem>
      ))}
    </Carousel>
  );
};
export default CarouselProject;
