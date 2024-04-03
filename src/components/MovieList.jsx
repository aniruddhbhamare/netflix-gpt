import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log("MoviesList Movies", movies);

  return (
    <div className="px-6 my-2">
      <h1 className="text-2xl py-2 text-white ">{title}</h1>

      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => {
            return (
              <MovieCard key={movie.id} moviesPosterPath={movie.poster_path} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
