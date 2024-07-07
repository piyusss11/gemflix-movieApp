import { NavLink, useParams } from "react-router-dom";
import Header from "./Header";
import { useSelector } from "react-redux";

import useMovieTrailer from "@/hooks/useMovieTrailer";
import useMovieInfo from "@/hooks/useMovieInfo";

const WatchPage = () => {
  const { movieId } = useParams();
  const trailerObj = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);
  const data = useMovieInfo(movieId)
  const {original_title,overview} = data || {}



  return (
    <div className="relative h-screen bg-black text-white">
      <NavLink to={"/browse"}>
        <Header />
      </NavLink>
      <div className="absolute inset-0 top-16 bg-black bg-opacity-50 flex flex-col items-center justify-center">
        <div className="w-full max-w-screen-lg">
          <iframe
            className="w-full h-[600px] md:h-[800px] lg:h-[500px]"
            src={`https://www.youtube.com/embed/${trailerObj?.key}`}
            title="YouTube video player"
            allow=" accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="mt-4 md:mt-8 text-center">
          <h1 className="text-3xl font-bold">{original_title || "...loading"}</h1>
          <p className="mt-2 md:mt-4 max-w-screen-md mx-auto">
            {overview || "...loading"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
