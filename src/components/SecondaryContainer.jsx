import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

export const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  console.log("Secondary", movies);
  // const popularMovies = useSelector((store) => store?.popularMovies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black p-2">
        <div className="relative -mt-48 z-20">
          <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
          <MovieList title={"Trending"} movies={movies?.nowPlayingMovies} />
          <MovieList
            title={"Comedy Movies"}
            movies={movies?.nowPlayingMovies}
          />
          <MovieList title={"Popular"} movies={movies?.popularMovies} />
          <MovieList
            title={"Upcoming Movies"}
            movies={movies?.nowPlayingMovies}
          />
        </div>

        {/* 
      
    MovieList - Popular
      - MovieCards * n
    MovieList - Now Playing
    MovieList - Trending
    MovieList - Comedy

    
    */}
      </div>
    )
  );
};
