import { API_OPTIONS } from "@/utils/constants";
import { useEffect } from "react";

const VideoBackground = (props) => {
  const { movieID } = props;
  const getMovieVIdeos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json?.results);
    const filteredData = json?.results.filter((video)=>video.type ==="Trailer")
    const trailer = filteredData.length? filteredData[0] : json?.results[0] // if trailer is there 
    console.log(trailer);
    
  };
  useEffect(() => {
    getMovieVIdeos();
  }, []);
  return <div>ill run in background</div>;
};

export default VideoBackground;
