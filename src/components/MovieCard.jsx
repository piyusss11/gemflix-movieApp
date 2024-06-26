// import React from "react";

import { POSTER_PATH } from "@/utils/constants";

const MovieCard = ({ list }) => {
  // console.log(list);

  return (
    <div className="w-40 h-56 overflow-hidden ">
      <img
        className="object-contain  "
        src={`${POSTER_PATH}${list?.poster_path}`}
        alt="img"
      />
    </div>
  );
};

export default MovieCard;


