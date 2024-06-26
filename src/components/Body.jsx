// import React from 'react'
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchPage from "./WatchPage";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/watch/:movieId",
      element: <WatchPage />,
    },
    // {
    //   path:"/gptSearch",
    //   element:
    // }
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
