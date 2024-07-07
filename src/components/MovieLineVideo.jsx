// import React from 'react'
// import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { NavLink } from "react-router-dom";

const MovieLineVideo = ({ list, title }) => {
  
  return (
    <div className="justify-center items-center py-6">
      <h1 className="text-white text-2xl px-10 font-semibold pb-6">{title}</h1>
      <Carousel className="w-[96%] mx-auto ">
        <CarouselContent className="-ml-1">
          {list?.map((movies, index) => (
            <NavLink key={index} to={`/watch/${movies?.id}`}>
              <CarouselItem className="pl-1 md:basis-1/3 lg:basis-1/6 w-40 max-w-40">
                <img
                  className="rounded-xl h-56 w-40"
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

export default MovieLineVideo;
