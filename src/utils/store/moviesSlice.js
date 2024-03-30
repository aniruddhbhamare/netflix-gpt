import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    // movies: [],
    // trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      //   store.movies.push(action.payload);
      state.nowPlayingMovies = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
  },
});

export default moviesSlice.reducer;
export const { addNowPlayingMovies, addMovieTrailer, addPopularMovies } =
  moviesSlice.actions;
