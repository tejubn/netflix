import React from 'react'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addPopularMovies } from '../utils/movieSlice';

import { API_Options } from '../utils/constants';
const usePopularMovies =()=>{
    const dispatch=useDispatch();

    const popularMovies=async()=>{
         const data=await fetch ("https://api.themoviedb.org/3/movie/popular?&page=1",API_Options);
  const json  =await data.json();
//   console.log(json)
  dispatch(addPopularMovies(json.results))
}
useEffect(()=>{
    popularMovies();
  },[])
}
export default usePopularMovies;