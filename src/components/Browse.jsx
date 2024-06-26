import useNowPlayingMovies from "@/hooks/useNowPlayingMovies";
import usePopularVideos from "@/hooks/usePopularVideos";
import MainHeader from "./MainHeader";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTopRated from "@/hooks/useTopRated";
import useUpcomingMovies from "@/hooks/useUpcomingMovies";
import usePopularTvSeries from "@/hooks/usePopularTvSeries";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  usePopularVideos();
  useTopRated();
  useUpcomingMovies();
  usePopularTvSeries();
  const showGpt = useSelector((store) => store?.gpt?.showGptSearch);
  return (
    <div className=" h-screen">
      <MainHeader />
      {showGpt ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
