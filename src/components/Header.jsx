import { LOGO_URL } from "@/utils/constants";


const Header = () => {
  return (
    <div className="absolute z-10 mt-4 ml-4 md:px-40">
      <img className="w-48  "
        src={LOGO_URL}
        alt="logo"
      />
    </div>
  );
};

export default Header;
