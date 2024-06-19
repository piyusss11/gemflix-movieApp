
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import {  signOut } from "firebase/auth";
import { auth } from "@/utils/firebase";
import { useSelector } from "react-redux";


const MainHeader = () => {
    const navigate = useNavigate()
    const user = useSelector((store)=>store.user)
    const handleSignOut = ()=>{
        signOut(auth).then(() => {
            navigate("/")
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
            navigate("/error")
          });
        
    }
  return (
    <div className="flex justify-between bg-black px-10 py-2 text-white items-center">
      <div className="flex items-center gap-8">
        <img
          className="w-28 mr-8 "
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </div>
      <div className="flex gap-2">
        <img
          className="rounded lg w-10 h-10"
          src={user?.photoURL}
          alt=""
        />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <i className=" text-white ri-arrow-down-s-fill"></i>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuItem>Name</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem><button onClick={handleSignOut}>Sign Out</button></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default MainHeader;
