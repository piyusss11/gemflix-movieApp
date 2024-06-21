import useNowPlayingMovies from "@/hooks/useNowPlayingMovies";
import MainHeader from "./MainHeader";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div className=" h-screen">
      <MainHeader />
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;
