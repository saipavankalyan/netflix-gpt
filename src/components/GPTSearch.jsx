import { BG_URL } from "../utils/constants";
import GptMovieSuggestions from "./GPTMovieSuggestions";
import GptSearchBar from "./GPTSearchBar";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="h-screen object-cover" src={BG_URL} alt="logo" />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};
export default GPTSearch;
