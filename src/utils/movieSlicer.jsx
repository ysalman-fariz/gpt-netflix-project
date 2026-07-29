import { createSlice } from "@reduxjs/toolkit";

const movieSlicer = createSlice({
  name: "NPmovies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    topRatedMovies: null,
    popularMovies: null,
    upcomingMovies: null,
  },
  reducers: {
    addToNowPlayMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addTrailerInfo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addToUpComingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addToPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
  },
});

export const {
  addToNowPlayMovies,
  addTrailerInfo,
  addTopRatedMovies,
  addToPopularMovies,
  addToUpComingMovies,
} = movieSlicer.actions;
export default movieSlicer.reducer;
