// import React from "react";
// import * as  from "react";
// import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { NavLink } from "react-router-dom";

const MovieLineSHadcn = ({ list }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-white text-3xl"></h1>
      <Carousel className="w-[96%]  mx-auto ">
        <CarouselContent className="-ml-1">
          {list?.map((movies, index) => (
            <NavLink
              key={index}
              to={`/watch/${movies?.title}%id=${movies?.id}`}
            >
              <CarouselItem className="pl-1 md:basis-1/3 lg:basis-1/6  w-56 ">
                <img
                  className="rounded-xl aspect-square h-80"
                  src={`https://image.tmdb.org/t/p/original/${movies?.poster_path}`}
                  alt=""
                />
              </CarouselItem>
            </NavLink>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default MovieLineSHadcn;
