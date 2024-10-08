import React from 'react'
import useMovieTrailer from '../hooks/useMovieTrailer'
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_Options } from '../utils/constants';
import { useSelector } from 'react-redux';
const VideoBackground = ({movieId}) => {

  useMovieTrailer(movieId);
  const trailerVideo=useSelector((store)=>store.movies?.trailerVideo) 
  // console.log(data)
  return (
       <div className=" w-screen">
       <iframe
         className="w-screen aspect-video"
         src={
           "https://www.youtube.com/embed/" +
           trailerVideo?.key +
           "?&autoplay=1&mute=1"
         }
         title="YouTube video player"
       ></iframe>
     </div>
  )
}

export default VideoBackground