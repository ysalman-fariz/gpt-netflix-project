import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const ResultOfMovies = () => {
  const { movieNames, resOfMovieSuggestions } = useSelector(
    (store) => store.AiGpt, 
  );
  if (!movieNames) return null;
 
  return (
    <div className="p-4 m-4 bg-black absolute top-1/3 ">
      <h1>Movie Names Found: {movieNames}</h1>
      <div className=" flex  flex-row overflow-x-scroll">
        {movieNames.map((movieName, index) => {
          return (
            <MoviesList
              key={movieName}
              title={movieName}
              movies={resOfMovieSuggestions[index]}
            />
          );
        })}
      </div>
    </div>
  );
};
export default ResultOfMovies;
