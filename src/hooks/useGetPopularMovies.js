import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/store/moviesSlice";
import { useEffect } from "react";

const useGetPopularMovies = () => {
  const popularMovies = useSelector((store) => store?.movies?.popularMovies);

  const dispatch = useDispatch();
  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);

  // Fetch the movies from TMDB API and update the store
  const getPopularMovies = async () => {
    const movieList = await fetch(
      "https://api.themoviedb.org/3/movie/popular?&page=1",
      API_OPTIONS
    );
    const json = await movieList.json();
    dispatch(addPopularMovies(json.results));
    console.log("Movie List | Fetch Now Popular Movies", json.results);
  };
};

export default useGetPopularMovies;
