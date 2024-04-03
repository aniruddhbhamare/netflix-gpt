import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSearchSuggestions from "./GptSearchSuggestions";
import { BG_URL } from "../utils/constants";

const GptSearchComponent = () => {
  return (
    <div className="">
      <div className="absolute -z-30">
        <img
          src={BG_URL}
          className="bg-cover fixed h-screen object-cover md:h-auto "
        />
      </div>
      <GptSearchBar />
      <GptSearchSuggestions />
      {/* 
      GptSearch Bar
      Gpt Movies Suggestion  {/* 
      */}
    </div>
  );
};

export default GptSearchComponent;
