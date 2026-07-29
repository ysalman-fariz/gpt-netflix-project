import { useSelector } from "react-redux";
import MoviesDescription from "./MoviesDescription";
import BackGroundVideo from "./BackGroundVideo";

const HeroTrailerContainer = () => {
  const movieData = useSelector((store) => store.NPmovies.nowPlayingMovies);

  if (!movieData) return null;
  const firstMovie = movieData[0];
  const { id, original_title, overview } = firstMovie;

  return (
    <div className="relative pt-[20%]  bg-black md:pt-0">
      <MoviesDescription original_title={original_title} overview={overview} />
      <BackGroundVideo movieId={id} />
    </div>
  );
};

export default HeroTrailerContainer;
{
  /* <div className="relative border-4 -top-30  ">
      <BackGroundVideo movieId={id} />

      <div className="absolute">
        <Header isBrowse />
      </div>

      <MoviesDescription
        id={id}
        original_title={original_title}
        overview={overview}
      />
    </div> */
}
