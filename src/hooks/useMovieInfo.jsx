import { API_OPTIONS } from "@/utils/constants";
import { useEffect, useState } from "react";

const useMovieInfo = (movieId) => {
  const [movieInfo, setMovieInfo] = useState(null);
  const getMovieInfo = async () => {
    const data = fetch(
      `https://api.themoviedb.org/3/movie/${movieId}`,
      API_OPTIONS
    );
    const json = (await data).json();
    const info = await json;
    // console.log(info);
    setMovieInfo(info);
    console.log(movieInfo);
    console.log(movieId);

    return movieInfo;
  };
  useEffect(() => {
    getMovieInfo();
  }, [movieId]);
  return movieInfo;
};

export default useMovieInfo;
