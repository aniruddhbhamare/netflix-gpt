import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addMovieTrailer } from "../utils/store/moviesSlice";
import { useDispatch } from "react-redux";

const useGetMovieTrailer = (movieId) => {
  // Fetching trailer video && updating the store with trailer video data

  const dispatch = useDispatch();

  useEffect(() => {
    getMovieVideo(movieId);
  }, []);

  // fetch trailer video
  const getMovieVideo = async (movieId) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    // console.log("VIDEOS", json);
    const findData = json.results.find((item) => {
      return item.name === "Official Trailer";
    });
    const trailer = findData ? findData : json.results[1];
    dispatch(addMovieTrailer(trailer));
    // console.log("trailVideoData", trailer);
  };
};

export default useGetMovieTrailer;
