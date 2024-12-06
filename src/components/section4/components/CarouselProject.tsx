"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import * as React from "react";
interface Prop {
  listItems: any[];
}
export const CarouselProject = ({ listItems }: Prop) => {
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
