import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/store/moviesSlice";
import { useEffect } from "react";

const useGetTopRatedMovies = () => {
  const topRatedMovies = useSelector((store) => store?.movies?.topRatedMovies);

  const dispatch = useDispatch();
  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []);

  // Fetch the movies from TMDB API and update the store
  const getTopRatedMovies = async () => {
    const movieList = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?&page=1",
      API_OPTIONS
    );
    const json = await movieList.json();
    dispatch(addTopRatedMovies(json.results));
    console.log("Movie List | Fetch Now Popular Movies", json.results);
  };
};

export default useGetTopRatedMovies;
