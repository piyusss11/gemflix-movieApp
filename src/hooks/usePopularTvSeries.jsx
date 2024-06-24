import { API_OPTIONS } from "@/utils/constants";
import { addPopularTvSeries } from "@/utils/moviesSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const usePopularTvSeries = () => {
  const dispatch = useDispatch();
  const getPopularTvSeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json?.results);
    dispatch(addPopularTvSeries(json?.results));
  };
  useEffect(() => {
    getPopularTvSeries();
  }, []);
};

export default usePopularTvSeries;
