import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../utils/store/moviesSlice";
import useGetMovieTrailer from "../hooks/useGetMovieTrailer";

const VideoBackground = (props) => {
  const { movieId } = props;
  useGetMovieTrailer(movieId);
  const trailerKey = useSelector((store) => store?.movies?.trailerVideo?.key);

  return (
    <div className="w-screen">
      {/* _inKs4eeHiI */}
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" + trailerKey + "?autoplay=1&mute=0"
        }
        title="YouTube video player"
        // frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share allowFullScreen"
        // frameborder="0"
        // autoplay="1"
        // referrerPolicy="strict-origin-when-cross-origin"
        // allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
