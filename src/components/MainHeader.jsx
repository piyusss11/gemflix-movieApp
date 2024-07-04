import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NavLink, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "@/utils/userSlice";
import { LANGUAGES, LOGO_URL } from "@/utils/constants";
import { removeGptSearchView, toggleGptSearchView } from "@/utils/gptSlice";
import { changeLanguage } from "@/utils/configSlice";

const MainHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const language = useSelector((store) => store.config?.lang);
  const user = useSelector((store) => store.user);

  const handleGptClick = () => {
    dispatch(toggleGptSearchView());
  };
  const handleHomeClick = () => {
    dispatch(removeGptSearchView());
  };
  const handleLanguage = (lang) => {
    // console.log("Changing language to:", lang);
    dispatch(changeLanguage(lang));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        dispatch(removeUser());
        navigate("/");
        // User is signed out
        // ...
      }
      return () => unsubscribe(); // unsubscribing when demounting the component
    });
  }, [dispatch, navigate]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="flex justify-between w-full bg-black bg-opacity-90 px-10 py-2 text-white items-center z-10">
      <div className="flex items-center gap-8">
        <img className="w-28 mr-8 " src={LOGO_URL} alt="logo" />
        <NavLink onClick={handleHomeClick} to={"/browse"}>
          Home
        </NavLink>
        <h1>My List</h1>
        <h1 className="cursor-pointer" onClick={handleGptClick}>
          GPT Search
        </h1>
      </div>

      <div className="flex gap-4">
        <img className="rounded lg w-10 h-10" src={user?.photoURL} alt="" />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <h1>{language}</h1>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {/* <div onChange={}> */}
            {LANGUAGES.map((lang) => (
              <div key={lang.identifier}>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <h1
                    className="font-semibold"
                    onClick={()=>handleLanguage(lang.identifier)}
                  >
                    {lang.name}
                  </h1>
                </DropdownMenuItem>
              </div>
            ))}
            {/* </div> */}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <i className=" text-white ri-arrow-down-s-fill"></i>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuItem>
              <h1>{user?.displayName}</h1>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <button className="font-semibold" onClick={handleSignOut}>
                Sign Out
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default MainHeader;
