import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import MovieCard from "./MovieCard";
import ClipLoader from "react-spinners/ClipLoader";
import BounceLoader from "react-spinners/BounceLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const GptSearchSuggestions = () => {
  const { searchMovies, isLoading } = useSelector((store) => store?.gpt);

  console.log("searchMovies", searchMovies);
  console.log("isLoading", isLoading);

  // const isLoading = useSelector((store) => store?.gpt?.isLoading);

  if (searchMovies?.length < 1)
    return (
      <h1 className="flex text-white p-8 justify-center text-2xl bg-black opacity-80 w-1/2 mx-80 my-20">
        No result found, Please enter the valid movie name.{" "}
      </h1>
    );
  return (
    <div className=" m-4">
      {/* <MovieList title={"Result"} movies={searchMovies} /> */}
      {searchMovies?.map((movie) => {
        console.log(movie);
        return (
          <div className="py-8 my-4 flex justify-center border bg-black opacity-80 rounded-lg">
            <div className="w-3/12 ">
              <MovieCard key={movie.id} moviesPosterPath={movie.poster_path} />
            </div>
            <div className="ml-2 text-white w-7/12">
              <div className="flex">
                <h1 className="text-white text-4xl">
                  {/* {movie.title} */}
                  {movie.original_title}
                </h1>
                <p className="mx-2 self-center">({movie.original_language})</p>
              </div>
              <p className="my-8"> {movie.overview}</p>
              <div className="flex justify-between">
                <h1>Vote - {movie.vote_count}</h1>
                <h1>Ratings - {movie.vote_average}</h1>
              </div>
              <h1 className="my-2">Release Date - {movie.release_date}</h1>
            </div>
          </div>
        );
      })}
      <div className="my-40 flex justify-center items-center">
        <BounceLoader
          color={"red"}
          loading={isLoading}
          cssOverride={override}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </div>
  );
};

export default GptSearchSuggestions;
