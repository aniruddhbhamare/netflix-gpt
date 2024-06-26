import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

export const MainContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);

  // Early Return
  if (!movies) return;

  const mainMovie = movies[9];

  // let mainMovie;
  // const randomMovie = () => {
  //   const digit = Math.floor(Math.random() * movies.length + 1);
  //   console.log("DIGIT", digit);
  //   mainMovie = movies[digit];
  // };
  // randomMovie();

  console.log("mainMovie", mainMovie);
  const {
    id,
    original_title,
    original_language,
    overview,
    popularity,
    poster_path,
    releaseDate,
    title,
    video,
    vote_average,
    vote_count,
  } = mainMovie;
  return (
    <div className="md:pt-0 pt-[35%] bg-black">
      {/* <h1>MainContainer</h1> */}
      <VideoTitle title={title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};
