import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptSearchString:"",
    movieResults: null,
    movieNames: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    removeGptSearchView: (state) => {
      state.showGptSearch = false;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },addGptSearchString:(state,action)=>{
      state.gptSearchString = action.payload
    }
  },
});
export const { toggleGptSearchView, removeGptSearchView,addGptMovieResult,addGptSearchString} = gptSlice.actions;
export default gptSlice.reducer;
