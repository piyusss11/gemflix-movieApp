import useNowPlayingMovies from "@/hooks/useNowPlayingMovies";
import usePopularVideos from "@/hooks/usePopularVideos";
import MainHeader from "./MainHeader";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTopRated from "@/hooks/useTopRated";
import useUpcomingMovies from "@/hooks/useUpcomingMovies";
import usePopularTvSeries from "@/hooks/usePopularTvSeries";
import { useSelector } from "react-redux";
import GptPage from "./GptPage";

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
        <GptPage />
      ) : (
        // <GptSearch />
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
