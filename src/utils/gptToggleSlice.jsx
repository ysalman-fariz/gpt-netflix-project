import { createSlice } from "@reduxjs/toolkit";

const gptToggleSlice = createSlice({
   name:"AiGpt",
   initialState:{
      showGptSearch:false,
      resOfMovieSuggestions:null,
      movieNames:null
   },
   reducers:{
      toggleTheGptSearchFEAT: (state) => {
         state.showGptSearch = !state.showGptSearch;
      },
      addToResOfMovieSuggestions: (state , action) => {
         const {movieNames , movieResults} = action.payload;
         state.resOfMovieSuggestions = movieResults;
         state.movieNames = movieNames;
      }
   }
})

export const {toggleTheGptSearchFEAT , addToResOfMovieSuggestions} = gptToggleSlice.actions;
export default gptToggleSlice.reducer;