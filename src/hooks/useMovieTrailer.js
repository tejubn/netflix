import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_Options } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
// import { addTrailerVideo } from "../utils/moviesSlice";
import { useSelector } from "react-redux";
const useMovieTrailer = (movieId) => {
const dispatch=useDispatch();
const data=useSelector((store)=>store.movies?.trailerVideo)
// console.log(data?.key)
    const getMovieVideo=async()=>{
        const data = await 
          fetch('https://api.themoviedb.org/3/movie/'+ movieId+'/videos?language=en-US', API_Options)
             
        const json= await data.json();
        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
      }
      useEffect(()=>{
        getMovieVideo();
      },[])
    
};
export default useMovieTrailer;