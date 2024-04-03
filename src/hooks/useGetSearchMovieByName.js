import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addMovieTrailer } from "../utils/store/moviesSlice";
import { useDispatch } from "react-redux";

const useGetSearchMovieByName = (movieName) => {
  // Fetching trailer video && updating the store with trailer video data

  const dispatch = useDispatch();

  useEffect(() => {
    searchMovies(movieName);
  }, []);

  // fetch trailer video
  const searchMovies = async (movieName) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();

    console.log("searchMovies", json);
  };
};

export default useGetSearchMovieByName;
