

const VideoTitle = (props) => {
  const { title, description } = props;
  return (
    <div className="pl-10 pt-40 bg-gradient-to-r absolute from-black z-10 text-white aspect-video ">
      <div className="w-1/3">
        <h1 className="text-3xl py-2">{title}</h1>
        <h1 className="text-[16px] py-2">{description}</h1>
      </div>
      <div className="flex gap-2 py-2">
        <button className="w-30 bg-white px-5 py-2 text-black  rounded-lg text-xl hover:bg-opacity-85"><i className="ri-play-fill "></i> Play</button>
        <button className="w-30 bg-gray-300 px-5 py-2 text-black bg-opacity-50 rounded-lg text-xl hover:bg-opacity-90"><i className="ri-information-line "></i> More Info</button>
      </div>
      {/* <img className="w-10" src={POSTER_PATH + poster} alt="" /> */}
    </div>
  );
};

export default VideoTitle;
