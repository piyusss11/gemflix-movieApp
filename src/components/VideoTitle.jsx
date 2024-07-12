import lang from "@/utils/languageConstants";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const VideoTitle = (props) => {
  const { title, description, movieID } = props;
  const currentlang = useSelector((store) => store.config?.lang);
  const translations = lang[currentlang] || lang.En;

  // console.log(props);

  return (
    <div className="w-full aspect-video pt-40 px-10 absolute text-white bg-gradient-to-r from-black">
      <h1 className="-mt-10 md:mt-0 text-lg md:text-2xl  font-bold">{translations.movieName || title}</h1>
      <p className=" hidden md:block py-6 text-lg w-1/4">{translations.movieDescription || description}</p>
      <div className="my-4 flex  md:mt-0">
        {
          <NavLink to={`/watch/${movieID}`}>
            <button className=" bg-white text-black p-1  md:p-4 px-4 md:px-10 text-base md:text-xl  rounded-lg hover:bg-opacity-80">
              <i className="ri-play-fill "></i> Play
            </button>
          </NavLink>
        }
        {
          <NavLink to={`/watch/${movieID}`}>
            <button className="hidden md:block mx-2  bg-gray-500 text-white p-4 px-10 text-xl bg-opacity-50 rounded-lg">
              <i className="ri-information-line "></i> More Info
            </button>
          </NavLink>
        }
      </div>
    </div>
  );
};

export default VideoTitle;
