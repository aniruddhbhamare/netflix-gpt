import React from "react";
import Header from "./Header";
import useGetNowPlayingMovies from "../hooks/useGetNowPlayingMovies";
import { MainContainer } from "./MainContainer";
import { SecondaryContainer } from "./SecondaryContainer";
import useGetPopularMovies from "../hooks/useGetPopularMovies";

const Browser = () => {
  useGetNowPlayingMovies();
  useGetPopularMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
    MovieContainer
      - VideoBackground
      - VideoTitle
     SecondaryCOntainer
      - MovieList * n
        - Cards * n
      */}
    </div>
  );
};

export default Browser;
