import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../../constants";
import { addTrailerInfo } from "../utils/movieSlicer";
import { useEffect } from "react";

const useFetchTrailerBgVideo = ({ movieId }) => {
  const disptach = useDispatch();
  const bgTrailer = useSelector((store) => store.NPmovies.trailerVideo);
  const fetchBgMovieTrailer = async () => {
   
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS,
    );
    const data = await response.json();


    const filterTrailersOnly = data.results?.filter(
      (video) => video.type === "Trailer",
    );
    const bgTrailer = filterTrailersOnly[0] || data[0];
    disptach(addTrailerInfo(bgTrailer));
  };

  useEffect(() => {
    if (!bgTrailer) {
    
      fetchBgMovieTrailer();
    }
  }, []);
};

export default useFetchTrailerBgVideo;
