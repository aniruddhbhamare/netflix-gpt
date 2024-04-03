// // import useGetSearchMovieByName from "../hooks/useGetSearchMovieByName";
// // import openai from "../utils/openai";

// const GptSearchBar = () => {
//     const searchText = useRef();
//     const selectedLang = useSelector((store) => store?.config?.lang);

//     const handleSearch = async () => {
//       const movieName = searchText?.current?.value;
//       const data = await fetch(
//         `https://api.themoviedb.org/3/search/${movieName}?include_adult=false&language=en-US&page=1`,
//         API_OPTIONS
//       );
//       const json = await data.json();

//       console.log("searchMovies", json);
//     };
//     };
//     // const handleSearch = () => {
//     //   const searchQuery =
//     //     "Act as a Movies Recommendation System and suggest some movies for the query : " +
//     //     searchText.current.value +
//     //     ". Only give me names of 5 movies, comma separated like the example result given ahead, Example Result: Gadar, Sholay, Don, Golmal, Koi Mil Gaya";
//     //   console.log(searchQuery);

//     //   let data = JSON.stringify({
//     //     model: "llama-2-13b-chat",
//     //     messages: [
//     //       {
//     //         role: "user",
//     //         content: searchQuery,
//     //       },
//     //     ],
//     //     stream: false,
//     //   });

//     //   let config = {
//     //     method: "post",
//     //     maxBodyLength: Infinity,
//     //     url: "https://api.theb.ai/v1/chat/completions",
//     //     // url: 'https://api.baizhi.ai/v1/chat/completions',
//     //     headers: {
//     //       Authorization: `Bearer ${GPT_API_KEY}`,
//     //       "Content-Type": "application/json",
//     //     },
//     //     data: data,
//     //   };

//     //   axios
//     //     .request(config)
//     //     .then((response) => {
//     //       console.log(JSON.stringify(response.data));
//     //     })
//     //     .catch((error) => {
//     //       console.log(error);
//     //     });
//     // };

//     // const handleSearch = async () => {
//     //   const searchQuery =
//     //     "Act as a Movies Recommendation System and suggest some movies for the query : " +
//     //     searchText.current.value +
//     //     ". Only give me names of 5 movies, comma separated like the example result given ahead, Example Result: Gadar, Sholay, Don, Golmal, Koi Mil Gaya";
//     //   console.log(searchQuery);
//     //   const completion = await openai.chat.completions.create({
//     //     messages: [{ role: "user", content: searchQuery }],
//     //     model: "gpt-3.5-turbo",
//     //   });

//     //   console.log(completion.choices);
//     // };
