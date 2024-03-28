import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/store/moviesSlice";
import { useEffect } from "react";

const useGetNowPlayingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  // Fetch the movies from TMDB API and update the store
  const getNowPlayingMovies = async () => {
    const movieList = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?&page=1",
      API_OPTIONS
    );
    const json = await movieList.json();
    dispatch(addNowPlayingMovies(json.results));
    // console.log("Movie List", json.results);
  };
};

export default useGetNowPlayingMovies;
