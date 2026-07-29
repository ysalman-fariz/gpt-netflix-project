import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../../constants";
import { addTopRatedMovies } from "../utils/movieSlicer";
import { useEffect } from "react";

const useFetchTopRated = () => {
  const disptach = useDispatch();
  const topRatedMovies = useSelector((store) => store.NPmovies.topRatedMovies);
  const fetchTopRatedMovies = async () => {
    // console.log("trailer api called")
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      API_OPTIONS,
    );
    const data = await response.json();
    // console.log(data);

    disptach(addTopRatedMovies(data.results));
  };

  useEffect(() => {
    !topRatedMovies && fetchTopRatedMovies();
    console.log("toprated movies called");
  }, []);
};

export default useFetchTopRated;
