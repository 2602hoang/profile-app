/* eslint-disable @next/next/no-img-element */
"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Pause, Play } from "lucide-react";

export const CarouselProject: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [api, setApi] = React.useState<any>();
  const [current, setCurrent] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(true);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  React.useEffect(() => {
    if (!api || !isPlaying) {
      return;
    }

    const autoplayInterval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(autoplayInterval);
  }, [api, isPlaying]);

  const items = [
    { title: "Mountain View", image: "/placeholder.svg?height=200&width=300" },
    { title: "Beach Sunset", image: "/placeholder.svg?height=200&width=300" },
    { title: "City Skyline", image: "/placeholder.svg?height=200&width=300" },
    { title: "Forest Trail", image: "/placeholder.svg?height=200&width=300" },
    { title: "Desert Oasis", image: "/placeholder.svg?height=200&width=300" },
  ];

  const toggleAutoplay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {items.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col items-center p-6">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-40 object-cover rounded-md mb-4"
                    />
                    <h3 className="text-lg font-semibold text-center">
                      {item.title}
                    </h3>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="mt-4 flex items-center justify-between">
        {/* <Progress
          value={(current / items.length) * 100}
          className="w-full max-w-[calc(100%-4rem)]"
        /> */}
        <Button
          variant="outline"
          size="icon"
          className="ml-4"
          onClick={toggleAutoplay}
          aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
        >
          {isPlaying ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4" />
          )}
        </Button>
      </div>
      <div className="mt-2 text-center text-sm text-muted-foreground">
        Slide {current} of {items.length}
      </div>
    </div>
  );
};
