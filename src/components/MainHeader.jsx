import React from "react";

const MainHeader = () => {
  return (
    <div className="flex justify-between bg-black px-10 py-2 text-white items-center">
      <div className="flex items-center gap-8">
        <img
          className="w-28 mr-8 "
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
        <h1>Home</h1>
        <h1>Tv Shows</h1>
        <h1>Movies</h1>
      </div>
      <div>
        <img className="rounded lg"
          src="https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABd8Oyt2qR7SGgM4xzz_KJ8Zx82hmZRkiVbFd63yVUfvCF46WI6YzmhnOWZRr38DfpMZ-J9E4H9x7KDShvOmJEcE6gjVuPlA.png?r=bcc"
          alt=""
        />
      </div>
    </div>
  );
};

export default MainHeader;
