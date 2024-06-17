import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);
  const navigate = useNavigate()
  const toggeleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  const handleButtonClick = () => {
    // console.log(email.current.value);
    // console.log(password.current.value);
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    // console.log(message);

    setErrorMsg(message);
    if (message) return;

    if (!isSignIn) {
      console.log("signing started");
      // For Signup
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          console.log("signing succesfully");
          navigate("/browse")

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(`${errorCode} - ${errorMessage}`);
          // console.log(`${errorCode} - ${errorMessage}`);
          // setErrorMsg(`Wrong Id or Password`);
        });
    } else {
      console.log("loggin starting");
      //for SignIn
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          console.log("loginned successfully");
          navigate("/browse")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // setErrorMsg(`${errorCode} - ${errorMessage}`);
          setErrorMsg(`Wrong Id or Password`);
        });
    }
  };
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

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-10 text-white bg-black bg-opacity-70 w-3/12  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
      >
        <div className="flex flex-col">
          <h1 className="text-3xl mb-4 font-bold ">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              ref={fullName}
              type="text"
              className="p-4 rounded-sm bg-black border-[1px] my-2 "
              placeholder="Full Name"
            />
          )}
          <input
            ref={email}
            type="text"
            className="p-4 rounded-sm bg-black border-[1px] my-2 "
            placeholder="Email"
          />
          <input
            ref={password}
            type="password"
            className="p-4 rounded-sm bg-black border-[1px] my-2 "
            placeholder="Password"
          />
          <p className="text-red-500 text-sm">{errorMsg}</p>
          <button
            onClick={handleButtonClick}
            className="bg-red-600 rounded-sm p-2 my-2"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <h1>
            {isSignIn ? "New To Netflix?" : "Ready to watch"}

            <span
              onClick={toggeleSignIn}
              className="hover:underline cursor-pointer "
            >
              {" "}
              {isSignIn ? "Sign Up Now" : "Sign In Now"}
            </span>
          </h1>
        </div>
      </form>
    </div>
  );
};

export default Login;
