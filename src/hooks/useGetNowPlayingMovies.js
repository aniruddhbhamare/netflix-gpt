import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/store/moviesSlice";
import { useEffect } from "react";

const useGetNowPlayingMovies = () => {
  const nowPlayingMovies = useSelector(
    (store) => store?.movies?.nowPlayingMovies
  );

  const dispatch = useDispatch();
  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);

  // Fetch the movies from TMDB API and update the store
  const getNowPlayingMovies = async () => {
    const movieList = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?&page=1",
      API_OPTIONS
    );
    const json = await movieList.json();
    dispatch(addNowPlayingMovies(json.results));
    console.log("Movie List | Fetch Now Playing Movies", json.results);
  };
};

export default useGetNowPlayingMovies;
