import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    // movies: [],
    trailerVideo: null,
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    isLoading: false,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      //   store.movies.push(action.payload);
      state.isLoading = action.payload;
      state.nowPlayingMovies = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.isLoading = action.payload;
      state.trailerVideo = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.isLoading = action.payload;
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.isLoading = action.payload;
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.isLoading = action.payload;
      state.upcomingMovies = action.payload;
    },
  },
});

export default moviesSlice.reducer;
export const {
  addNowPlayingMovies,
  addMovieTrailer,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} = moviesSlice.actions;
