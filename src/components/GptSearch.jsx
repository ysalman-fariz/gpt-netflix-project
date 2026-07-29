import SearchBar from "./Home/SearchBar";
import ResultOfMovies from "./Home/ResultOfMovies";
import bgImage from "../assets/bg.jpg";
const GptSearch = () => {
  return (
    <div className=" object-cover ">
      <img src={bgImage} alt="bg-image" />
      <SearchBar />
      <ResultOfMovies />
    </div>
  );
};

export default GptSearch;
