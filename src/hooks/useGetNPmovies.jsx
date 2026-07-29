import { useEffect } from "react";
import { API_OPTIONS } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { addToNowPlayMovies } from "../utils/movieSlicer";

const useGetNPmovies = () => {
  const dispatcherForMovies = useDispatch();
  const nowPlayingMovies = useSelector((store) => store.NPmovies.nowPlayingMovies)

  const getNowPlayingMoviesList =  () => {
    
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS,
    )
      .then((res) => res.json())
      .then((res) => {
          console.log("Npmovies")
        dispatcherForMovies(addToNowPlayMovies(res.results));
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
   
     !nowPlayingMovies && getNowPlayingMoviesList();
      console.log("getNowPlayingMoviesList called")
    
  }, []);
};

export default useGetNPmovies;
