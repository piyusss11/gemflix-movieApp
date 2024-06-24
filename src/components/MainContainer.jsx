import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[3];
  // console.log(mainMovie);
  const { original_title, overview,id } = mainMovie;
  return (
    <div className="overflow">
      <VideoTitle title={original_title} description={overview} />
      <VideoBackground movieID={id}  />
    </div>
  );
};

export default MainContainer;
