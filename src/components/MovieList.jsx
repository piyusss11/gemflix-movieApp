// import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(movies);

  return (
    <div className="px-10 text-white py-4">
      <h1 className="text-2xl font-semibold pb-4">{title}</h1>
      <div className="flex overflow-x-scroll scroll-smooth ">
        <div className="flex gap-2">
          {movies?.map((movies) => (
            <MovieCard list={movies} key={movies?.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
