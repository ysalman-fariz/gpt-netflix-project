import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {
  if (!movies) return null;

  return (
    <div className="px-6 text-white my-6">
      <h1 className="text-xl md:text-2xl font-bold py-4">{title}</h1>

      {/* Horizontal Scroll Container */}
      <div className="flex overflow-x-scroll scrollbar-none space-x-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} poster_path={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
//  <>
//       <h1 className="p-6">{title}</h1>

//       <div className="flex flex-row overflow-x-scroll  ">
//         {movies.map((movie) => (
//           <MovieCard poster_path={movie.poster_path} key={movie.id} />
//         ))}
//       </div>
//     </>
