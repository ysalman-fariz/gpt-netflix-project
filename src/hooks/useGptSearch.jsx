import { useState } from "react";
import { useDispatch } from "react-redux";
import { groq } from "../utils/opeanai";
import { fetchTmdbMovie } from "../utils/tmdbApi";
import { addToResOfMovieSuggestions } from "../utils/gptToggleSlice";

export const useGptSearch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const getGroqMovieArray = async (query) => {
    const chatCompletion = await groq.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "openai/gpt-oss-20b",
    });

    const content = chatCompletion?.choices?.[0]?.message?.content || "";
    return content
      .split(",")
      .map((movie) => movie.trim())
      .filter(Boolean);
  };

  const handleSearch = async (searchText) => {
    if (!searchText?.trim()) {
      alert("Please enter a movie name.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const query =
        `Recommend exactly 3 Hollywood movies similar to "${searchText}". ` +
        `Return only the movie names separated by commas.`;

      const movieNames = await getGroqMovieArray(query);

      const promiseArray = movieNames.map((movie) => fetchTmdbMovie(movie));
      const tmdbResults = await Promise.all(promiseArray);

      dispatch(
        addToResOfMovieSuggestions({
          movieNames: movieNames,
          movieResults: tmdbResults,
        }),
      );
    } catch (err) {
      console.error("GPT Search Error:", err);
      setError("Failed to fetch movie suggestions. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { handleSearch, loading, error };
};
