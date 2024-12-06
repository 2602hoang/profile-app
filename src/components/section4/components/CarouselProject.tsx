"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import * as React from "react";
import { ItemProject } from "../data";

export const CarouselProject = ({
  listItems: listItems,
}: {
  listItems: ItemProject[];
}) => {
  return (
    <Carousel className="bg-white px-8 w-full">
      <CarouselContent>
        {listItems.map((item) => (
          <CarouselItem key={item.key} className=" ">
            <div className="p-1 text-black bg-white">{item.title}</div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
