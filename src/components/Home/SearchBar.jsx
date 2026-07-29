import { useRef } from "react";
import { useGptSearch } from "../../hooks/useGptSearch";
import { langOptions } from "../../utils/langOptions"; // Adjust import path as needed

const SearchBar = () => {
  const inputForSearchMovie = useRef(null);
  const { handleSearch, loading, error } = useGptSearch();

  const onFormSubmit = (e) => {
    e.preventDefault();
    const query = inputForSearchMovie.current?.value;
    handleSearch(query);
  };

  return (
    <div className="absolute top-[20%] left-1/2 -translate-x-1/2 z-10 w-full flex flex-col items-center px-4">
      <form
        className="w-full max-w-2xl bg-black/80 rounded-md grid grid-cols-10 overflow-hidden shadow-lg"
        onSubmit={onFormSubmit}
      >
        <input
          type="text"
          ref={inputForSearchMovie}
          placeholder="Search movies by name..."
          className="col-span-7 sm:col-span-8 px-4 py-3 md:py-4 text-lg md:text-xl text-white bg-transparent outline-none"
        />
        <button
          type="submit"
          disabled={loading}
          className="col-span-3 sm:col-span-2 bg-red-600 text-white text-lg md:text-xl font-semibold hover:bg-red-700 disabled:bg-gray-500 transition-colors flex items-center justify-center"
        >
          {loading ? "Searching..." : langOptions["en"].search}
        </button>
      </form>

      {error && (
        <p className="text-red-500 font-semibold mt-2 bg-black/70 px-4 py-1 rounded">
          {error}
        </p>
      )}
    </div>
  );
};

export default SearchBar;