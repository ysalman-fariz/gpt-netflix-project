import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";
const ListOfMovies = () => {
  const movies = useSelector((store) => store.NPmovies);
  return (
    // ListOfMovies.jsx
    <div className="-mt-20 md:-mt-52 relative z-20 px-4 md:px-12">
      <MoviesList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MoviesList title={"Top Rated"} movies={movies.topRatedMovies} />
      <MoviesList title={"Popular Movies"} movies={movies.popularMovies} />
      <MoviesList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
    </div>
  );
};

export default ListOfMovies;
