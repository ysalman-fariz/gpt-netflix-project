import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesReducer from "./movieSlicer";
import gptReducer from "./gptToggleSlice";
const store = configureStore({
  reducer: {
    user: userSlice,
    NPmovies: moviesReducer,
    AiGpt: gptReducer,
  },
});

export default store;
