import React from "react";

const VideoTitle = (props) => {
  const { title, overview } = props;
  return (
    <div className="absolute text-white pt-[40%] md:pt-40 px-8  bg-gradient-to-r from-black w-screen aspect-video ">
      <h1 className="text-xl md:text-5xl font-bold -mt-[15%] md:-mt-0">
        {title}
      </h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/3">{overview}</p>
      <div className="">
        <button className="my-2 md:my-0 py-1 md:py-2 md:px-9 px-4 bg-white text-black rounded-md shadow-lg text-xl hover:opacity-80">
          ▶️ Play
        </button>
        <button className=" hidden md:inline-block py-2 px-9 bg-gray-500 text-white  rounded-md ml-2 shadow-lg text-xl  bg-opacity-60 hover:opacity-80">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
