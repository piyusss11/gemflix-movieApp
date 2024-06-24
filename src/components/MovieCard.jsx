// import React from "react";

import { POSTER_PATH } from "@/utils/constants";

const MovieCard = ({ list }) => {
  // console.log(list);

  return (
    <div className="w-40 h-56 overflow-hidden ">
      <img
        className="object-contain  "
        src={`${POSTER_PATH}${list?.poster_path}`}
        alt="img"
      />
    </div>
  );
};

export default MovieCard;

// import * as React from "react"
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

{
  /* <Carousel className="w-full bg-black ">
  <CarouselContent className="-ml-1">
    {list?.map((movies, index) => (
      <CarouselItem key={index} className="pl-1 md:basis-1/3 lg:basis-1/6">
        <div className="p-1 ">
          <Card>
            <CardContent className="flex aspect-video items-center justify-center p-0 ">
              <img
                src={`https://image.tmdb.org/t/p/original/${movies?.backdrop_path}`}
                alt=""
              />
              <span className="text-2xl font-semibold">{index + 1}</span>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>; */
}
