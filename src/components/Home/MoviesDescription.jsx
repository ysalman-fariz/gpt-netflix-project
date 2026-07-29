const MoviesDescription = ({ id, original_title, overview }) => {
  return (
    // MoviesDescription.jsx
    <div className="absolute text-white bottom-12 md:top-1/3 left-4 md:left-12 z-10">
      <h1 className="font-bold text-2xl md:text-5xl drop-shadow-md">
        {original_title}
      </h1>

      {/* Hide long description on mobile screens */}
      <p className="hidden md:block w-1/3 my-4 text-sm md:text-lg text-gray-200">
        {overview}
      </p>

      <div className="flex gap-3 mt-4">
        <button className="px-4 py-2 md:px-8 md:py-3 bg-white text-black font-bold rounded hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="px-4 py-2 md:px-8 md:py-3 bg-gray-500/70 text-white font-bold rounded hover:bg-opacity-50">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default MoviesDescription;
