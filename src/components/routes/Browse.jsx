/* eslint-disable no-unused-vars */
import Header from "../Header";
import useGetNPmovies from "../../hooks/useGetNPmovies";
import HeroTrailerContainer from "../Home/HeroTrailerContainer";
import ListOfMovies from "../Home/ListOfMovies";
import { useEffect } from "react";
import useFetchTopRated from "../../hooks/useFetchTopRated";
import GptSearch from "../GptSearch";
import { useSelector } from "react-redux";
import useFetchPopularMovies from "../../hooks/useFetchPopularMovies";
import useFetchUpcomingMovies from "../../hooks/useFetchUpcomingMovies";
const Browse = () => {
  const gptSearchToggler = useSelector((store) => store.AiGpt.showGptSearch);

  useGetNPmovies();
  useFetchTopRated();
  useFetchPopularMovies();
  useFetchUpcomingMovies();
  return (
    <div id="root-2" className="bg-zinc-900 text-white min-h-screen">
      <Header isBrowse />
      {gptSearchToggler ? (
        <GptSearch />
      ) : (
        <>
          <HeroTrailerContainer />
        
          <div className="-mt-48 md:-mt-60 relative z-20 pl-4 md:pl-12">
            <ListOfMovies />
          </div>
        </>
      )}
    </div>
   
  );
};

export default Browse;

