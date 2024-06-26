import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BG_URL } from "@/utils/constants";

const GptSearch = () => {
  return (
    <div className="flex justify-center bg-black">
      <div className="absolute">
        <img
          className="bg-gradient-to-b from-black h-full bg-opacity-10"
          src="https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="flex w-full absolute justify-center mt-64  max-w-sm items-center space-x-2">
        <Input type="email" placeholder="What do you want to watch?" />
        <Button type="submit">Subscribe</Button>
      </div>
    </div>
  );
};

export default GptSearch;
