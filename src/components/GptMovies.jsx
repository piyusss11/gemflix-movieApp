import { useSelector } from "react-redux";
import MovieLineSHadcn from "./MovieLineSHadcn";

const GptMovies = () => {
  const gptMovies = useSelector((store) => store.gpt?.movieResults);
  const searchString = useSelector((store) => store.gpt?.gptSearchString);
  return (
    <div className="">
      {gptMovies && (
        <div>
            <h1 className="px-10 py-4 text-lg font-semibold">Movie Results for: {searchString}</h1>
            <MovieLineSHadcn
              list={gptMovies}
            />
        </div>
      )}
    </div>
  );
};

export default GptMovies;
