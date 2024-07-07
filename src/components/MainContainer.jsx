import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  // const num = Math.floor(Math.random() * 10)
  // console.log(num);
  
  const mainMovie = movies[2];
  // console.log(mainMovie);
  const { original_title, overview,id } = mainMovie;
  return (
    <div className="overflow">
      <VideoTitle title={original_title} description={overview} movieID={id} />
      <VideoBackground movieID={id}  />
    </div>
  );
};

export default MainContainer;
