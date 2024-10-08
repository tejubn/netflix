import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/movieSlice";

import { API_Options } from '../utils/constants';
const useNowPlayingMovies=(movieId)=>{
    const dispatch=useDispatch();
  const nowPlayingMovies=async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_Options);
    const json= await data.json();
    
    dispatch(addNowPlayingMovies(json.results))
    // console.log(result)
  }
  useEffect(()=>{
    nowPlayingMovies();
  },[])
}
export default useNowPlayingMovies;