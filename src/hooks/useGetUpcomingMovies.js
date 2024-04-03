import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/store/moviesSlice";
import { useEffect } from "react";

const useGetUpcomingMovies = () => {
  const upcomingMovies = useSelector((store) => store?.movies?.upcomingMovies);

  const dispatch = useDispatch();
  useEffect(() => {
    !upcomingMovies && getUpcomingMovies();
  }, []);

  // Fetch the movies from TMDB API and update the store
  const getUpcomingMovies = async () => {
    const movieList = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?&page=1",
      API_OPTIONS
    );
    const json = await movieList.json();
    dispatch(addUpcomingMovies(json.results));
    console.log("Movie List | Fetch Now Popular Movies", json.results);
  };
};

export default useGetUpcomingMovies;
