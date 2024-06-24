import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  return (
    movies && (
      <div className="bg-black z-40 ">
        <div className="-mt-56 z-80 relative">
          <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
          <MovieList title={"Popular Movies"} movies={movies?.popularMovies} />
          <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
          <MovieList title={"Top Rated"} movies={movies?.upcomingMovies} />
          <MovieList title={"Popular TV Series"} movies={movies?.popularTvSeries} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
