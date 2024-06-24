import useNowPlayingMovies from "@/hooks/useNowPlayingMovies";
import usePopularVideos from "@/hooks/usePopularVideos";
import MainHeader from "./MainHeader";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTopRated from "@/hooks/useTopRated";
import useUpcomingMovies from "@/hooks/useUpcomingMovies";
import usePopularTvSeries from "@/hooks/usePopularTvSeries";

const Browse = () => {
  useNowPlayingMovies();
  usePopularVideos()
  useTopRated()
  useUpcomingMovies()
  usePopularTvSeries()
  return (
    <div className=" h-screen">
      <MainHeader />
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;
