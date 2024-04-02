import React from "react";
import Header from "./Header";
import useGetNowPlayingMovies from "../hooks/useGetNowPlayingMovies";
import { MainContainer } from "./MainContainer";
import { SecondaryContainer } from "./SecondaryContainer";
import useGetPopularMovies from "../hooks/useGetPopularMovies";
import useGetTopRatedMovies from "../hooks/useGetTopRated";
import useGetUpcomingMovies from "../hooks/useGetUpcomingMovies";
import GptSearchComponent from "./GptSearchComponent";
import { useSelector } from "react-redux";

const Browser = () => {
  useGetNowPlayingMovies();
  useGetPopularMovies();
  useGetTopRatedMovies();
  useGetUpcomingMovies();
  const showGptSearch = useSelector((store) => store?.gpt?.showGptSearch);
  return (
    <div>
      <Header />

      {showGptSearch ? (
        <GptSearchComponent />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
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
