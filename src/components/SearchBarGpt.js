import React from 'react';
import { BG_URL } from '../utils/constants';
import lang from '../utils/langConstants';
import { useSelector } from 'react-redux';

const SearchBarGpt = () => {
    const langKey = useSelector((store) => store.config.lang);
    console.log(lang[langKey].search)
  return (
    <div className="flex justify-center  items-center h-screen">
             <div className=" absolute z-[-1] ">
        <img
          src={BG_URL}
          alt="logo"
        />
      </div>
      <form className="flex bg-black p-4 rounded-lg shadow-lg">
        <input
          type="text"
          placeholder={lang[langKey].placeHolder}
          className="bg-gray-800 text-white rounded-l-md px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <button
          type="submit"
          className="bg-red-600 text-white font-semibold px-4 py-2 rounded-r-md hover:bg-red-700 transition-colors duration-200 ease-in-out"
        >{lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default SearchBarGpt;
