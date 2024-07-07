import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { API_OPTIONS } from "@/utils/constants";
import { genAI } from "@/utils/geminiAi";
import { addGptMovieResult, addGptSearchString } from "@/utils/gptSlice";
import lang from "@/utils/languageConstants";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import GptMovies from "./GptMovies";

const GptSearch = () => {
  const dispatch = useDispatch()
  const currentlang = useSelector((store) => store.config?.lang);
  const translations = lang[currentlang] || lang.En;

  const searchText = useRef();

  const getMovieByName = async (name) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        name +
        "&include_adult=false&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results[0];
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    const gptQuery = "Act as a movie recommendation system and suggest some movies for the query : "+ searchText.current.value +". give me the name of only 8 movies and nothing extra not numberings just seperate them with commas like the example ahead . Example : Don, Singh is King, Life of a Pie, Jab we met, Welcome, EK tha Tiger, Golmaal, Dhol";
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(gptQuery);
    const response = result.response;
    const text = response.text();
    console.log(text);
    // got the names of movies in the form of a string like = don , jab we met , ek tha tiger

    const movies = text.split(",");
    // seperated the string into an array of 5
    console.log(movies);

    const promiseArray = movies.map((movie) => getMovieByName(movie));
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(addGptMovieResult({movieNames:movies,movieResults:tmdbResults}))
    dispatch(addGptSearchString(searchText.current.value))
  };

  return (
    <div className="flex justify-center w-full">
      <div className="flex w-full  justify-center mt-2  max-w-sm items-center space-x-2">
        <Input
          ref={searchText}
          type="email"
          placeholder={translations.gptSearchPlaceholder}
        />
        <Button size="lg" type="submit" onClick={handleGptSearchClick}>
          {translations.search}
        </Button>
      </div>
    
    </div>
  );
};

export default GptSearch;
