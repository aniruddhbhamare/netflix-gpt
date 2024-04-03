import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ moviesPosterPath }) => {
  console.log("moviesPosterPath", IMG_CDN_URL + moviesPosterPath);
  return (
    <div className="w-48 mr-4">
      <img alt="Movie Card" src={IMG_CDN_URL + moviesPosterPath} />
    </div>
  );
};

export default MovieCard;
