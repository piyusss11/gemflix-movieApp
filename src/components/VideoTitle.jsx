import { NavLink } from "react-router-dom";

const VideoTitle = (props) => {
  const { title, description, movieID } = props;
  // console.log(props);

  return (
    <div className="w-full aspect-video pt-40 px-10 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl  font-bold">{title}</h1>
      <p className="  py-6 text-lg w-1/4">{description}</p>
      <div className="my-4 ">
        {
          <NavLink to={`/watch/${title}%id=${movieID}`}>
            <button className=" bg-white text-black  p-4 px-10 text-xl  rounded-lg hover:bg-opacity-80">
              <i className="ri-play-fill "></i> Play
            </button>
          </NavLink>
        }
        {
          <NavLink to={`/watch/${title}%id=${movieID}`}>
            <button className=" mx-2  bg-gray-500 text-white p-4 px-10 text-xl bg-opacity-50 rounded-lg">
              <i className="ri-information-line "></i> More Info
            </button>
          </NavLink>
        }
      </div>
    </div>
  );
};

export default VideoTitle;
