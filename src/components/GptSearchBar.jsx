import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const selectedLang = useSelector((store) => store?.config?.lang);
  return (
    <div className="pt-[9%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12 p-2">
        <input
          className="p-2 m-1 col-span-9"
          type="text"
          placeholder={lang[selectedLang].gptSearchPlaceholder}
          // placeholder={lang.hindi.gptSearchPlaceholder}
        />
        <button className="col-span-3 p-2 m-1 bg-red-800 text-white rounded-lg">
          {lang[selectedLang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
