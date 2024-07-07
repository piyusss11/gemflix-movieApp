import GptMovies from "./GptMovies";
import GptSearch from "./GptSearch";

const GptPage = () => {
  return (
    <div className="relative h-screen  flex flex-col items-center justify-center">
      <img 
        className="absolute inset-0 h-full w-full object-cover z-0"
        src="https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className="relative z-10 flex flex-col items-center space-y-10 w-full">
        <GptSearch />
        <div className="overflow-x-auto w-full">
          <GptMovies />
        </div>
      </div>
    </div>
  );
};

export default GptPage;
