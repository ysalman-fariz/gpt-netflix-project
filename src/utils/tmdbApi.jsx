import { API_OPTIONS } from "../../constants";

export const fetchTmdbMovie = async (movieName) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
        movieName
      )}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching TMDB data:", error);
    return [];
  }
};