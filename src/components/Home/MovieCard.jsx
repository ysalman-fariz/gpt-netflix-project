import { POSTER_PATH_CDN_URL } from "../../../constants";
const MovieCard = ({ poster_path }) => {
  if (!poster_path) return null;
  return (
   
    <div className="w-32 sm:w-36 md:w-48 shrink-0 cursor-pointer transition-transform duration-300 hover:scale-105">
      <img
        className="rounded-md object-cover w-full"
        src={POSTER_PATH_CDN_URL + poster_path}
        alt="Poster"
      />
    </div>
  );
};

export default MovieCard;

