import { API_OPTIONS } from "@/utils/constants";
import { addTrailerVideo, removeTrailerVideo } from "@/utils/moviesSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useMovieTrailer = (movieID) => {
  const dispatch = useDispatch();
  const movietrailer = useSelector((store)=>store.movies.trailerVideo)
  const getMovieVideos = async () => {
    dispatch(removeTrailerVideo())
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json?.results);
    const filteredData = json?.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filteredData.length ? filteredData[0] : json?.results[0]; // if trailer is there
    // console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    !movietrailer && getMovieVideos();
  }, []);
};

export default useMovieTrailer;
