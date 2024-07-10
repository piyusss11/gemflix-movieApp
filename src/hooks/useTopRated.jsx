import { API_OPTIONS } from "@/utils/constants";
import { addTopRatedMovies } from "@/utils/moviesSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useTopRated = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store)=>store.movies.topRatedMovies)
  const getTopRated = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json?.results);
    dispatch(addTopRatedMovies(json?.results));
  };
  useEffect(() => {
    !topRatedMovies && getTopRated();
  }, []);
};

export default useTopRated;
