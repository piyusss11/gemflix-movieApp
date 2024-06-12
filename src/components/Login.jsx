import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn,setIsSignIn] = useState(true)
  const toggeleSignIn = ()=>{
    setIsSignIn(!isSignIn)
  }
  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img
          className="bg-gradient-to-b from-black"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>

      <form className="absolute p-10 text-white bg-black bg-opacity-70 w-3/12  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <div className="flex flex-col">
          <h1 className="text-3xl mb-4 font-bold ">{(isSignIn) ? "Sign In" : "Sign Up"}</h1>
          {!isSignIn && <input
            type="text"
            className="p-4 rounded-sm bg-black border-[1px] my-2 "
            placeholder="Full Name"
          />}
          <input
            type="text"
            className="p-4 rounded-sm bg-black border-[1px] my-2 "
            placeholder="Email"
          />
          <input
            type="password"
            className="p-4 rounded-sm bg-black border-[1px] my-2 "
            placeholder="Password"
          />
          <button className="bg-red-600 rounded-sm p-2 my-2">{(isSignIn) ? "Sign In" : "Sign Up"}</button>
          <h1>
          {(isSignIn) ? "New To Netflix?" : "Ready to watch"}
            
            <span onClick={toggeleSignIn} className="hover:underline cursor-pointer "> {(isSignIn) ? "Sign Up Now" : "Sign In Now"}</span>
          </h1>
        </div>
      </form>
    </div>
  );
};

export default Login;
