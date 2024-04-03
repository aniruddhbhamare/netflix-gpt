import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    searchMovies: null,
    isLoading: false,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addSearchMovies: (state, action) => {
      console.log("addSearchMovies", action);
      const { searchMovies, isLoading } = action.payload;
      state.isLoading = isLoading;
      state.searchMovies = searchMovies;
    },
  },
});

export default gptSlice.reducer;
export const { toggleGptSearchView, addSearchMovies } = gptSlice.actions;
