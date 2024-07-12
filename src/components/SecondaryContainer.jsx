import MovieLineSHadcn from "./MovieLineSHadcn";
// import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import MovieLineVideo from "./MovieLineVideo";
import lang from "@/utils/languageConstants";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  const currentlang = useSelector((store) => store.config?.lang);
  const translations = lang[currentlang] || lang.En;
  return (
    movies && (
      <div className="bg-black z-40 ">
        <div className="md:-mt-56 z-80 relative">
          <MovieLineSHadcn
            title={"Now Playing"}
            list={movies?.nowPlayingMovies}
          />
          <MovieLineVideo
            title={translations.popularMovie || "Popular Movies"}
            list={movies?.popularMovies}
          />
          <MovieLineVideo title={ translations.topRated || "Top Rated"} list={movies?.topRatedMovies} />
          <MovieLineVideo
            title={translations.upcomingMovies || "Upcoming Movies"}
            list={movies?.upcomingMovies}
          />
          {/* <MovieLineVideo
            title={"Popular TV Series"}
            list={movies?.popularTvSeries}
          /> */}
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
