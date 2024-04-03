import React, { useRef, useState } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addSearchMovies } from "../utils/store/gptSlice";

const GptSearchBar = () => {
  const searchText = useRef();
  const dispatch = useDispatch();
  let [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    dispatch(addSearchMovies({ isLoading: true }));

    const movieName = searchText?.current?.value;
    console.log(movieName);
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addSearchMovies({ searchMovies: json.results }));
    dispatch(addSearchMovies({ isLoading: false }));

    console.log("searchMovies", json);
  };

  const selectedLang = useSelector((store) => store?.config?.lang);
  return (
    <div className="pt-[9%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12 p-2"
        onClick={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-2 m-1 col-span-9"
          type="text"
          placeholder={lang[selectedLang].gptSearchPlaceholder}
          // placeholder={lang.hindi.gptSearchPlaceholder}
        />
        <button
          className="col-span-3 p-2 m-1 bg-red-800 text-white rounded-lg"
          onClick={handleSearch}
        >
          {lang[selectedLang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
