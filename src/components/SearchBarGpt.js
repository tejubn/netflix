import React, { useRef } from "react";
import { API_Options, BG_URL } from "../utils/constants";
import lang from "../utils/langConstants";
import { useSelector } from "react-redux";
// import openai from '../utils/openai';
import { GPT_KEY } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";
import { GoogleGenerativeAI } from "@google/generative-ai";
const SearchBarGpt =  () => {
    const dispatch = useDispatch();
    const langKey = useSelector((store)=>store.config.lang)
    const searchText = useRef(null);
    const genAI = new GoogleGenerativeAI(GPT_KEY);


    //This will search the movie in TMDB
    const searchMovieTMDB = async (movie) => {
      const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+ movie +
        "&include_adult=false&language=en-US&page=1", API_Options);
        const json = await data.json()

        return json.results;
    };

    const handleGptSearchClick = async () => {
        console.log(searchText.current.value);
        //Make an API Call to GPT API and get Movie Results
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query : " 
                          + searchText.current.value + 
                          ". only give me names of 5 movies, comma seperated like the example result given ahead.Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
        
            const result = await model.generateContent(gptQuery);

            if(!result.response){
              //TODO: Write Error Handling
            }
            // console.log(result.response.candidates[0].content.parts[0].text);

            const gptMovies = result.response?.candidates[0]?.content?.parts[0]?.text.split(",");

            // console.log("gptMovies",gptMovies);
            //For each movie will search the TMDB API 

            const promiseArray = gptMovies.map((movie)=>searchMovieTMDB(movie));
              //this will return 5 promises

             

            const tmdbResults = await Promise.all(promiseArray);
            // console.log("data is ",tmdbResults);

            dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}));

            
      
    }
  return (
    <div className="flex justify-center  items-center h-screen">
      <div className=" absolute z-[-1] ">
        <img src={BG_URL} alt="logo" />
      </div>
      <form
        className="flex bg-black p-4 rounded-lg shadow-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].placeHolder}
          className="bg-gray-800 text-white rounded-l-md px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <button
          type="submit"
          className="bg-red-600 text-white font-semibold px-4 py-2 rounded-r-md hover:bg-red-700 transition-colors duration-200 ease-in-out"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default SearchBarGpt;
