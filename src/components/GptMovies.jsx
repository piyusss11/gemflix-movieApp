import { useSelector } from "react-redux";
import MovieLineSHadcn from "./MovieLineSHadcn";
import lang from "@/utils/languageConstants";

const GptMovies = () => {
  const gptMovies = useSelector((store) => store.gpt?.movieResults);
  const searchString = useSelector((store) => store.gpt?.gptSearchString);
  const currentlang = useSelector((store) => store.config?.lang);
  const translations = lang[currentlang] || lang.En;
  return (
    <div className="">
      {gptMovies && (
        <div>
          <h1 className="px-10 py-4 text-lg font-semibold">
            {translations.geminiSearchText} {searchString}
          </h1>
          <MovieLineSHadcn list={gptMovies} />
        </div>
      )}
    </div>
  );
};

export default GptMovies;
