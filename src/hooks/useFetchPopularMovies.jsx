import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../../constants";
import { addToPopularMovies } from "../utils/movieSlicer";
import { useEffect } from "react";

const useFetchPopularMovies = () => {
  const disptach = useDispatch();
  const popularMovies = useSelector((store) => store.NPmovies.popularMovies);
  const fetchPopularMovies = async () => {
   
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page",
      API_OPTIONS,
    );
    const data = await response.json();
  
    disptach(addToPopularMovies(data.results));
  };
  useEffect(() => {
    !popularMovies && fetchPopularMovies();
   
  }, []);
};

export default useFetchPopularMovies;
