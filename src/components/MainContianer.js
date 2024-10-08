import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
const MainContianer = () => {
    const data=useSelector((store)=>store.movies?.nowPlayingMovies);
  if(!data)return;
  const mainMovies=data[0];
  // console.log(mainMovies)
  const {original_title,overview,id}=mainMovies;
  // console.log(original_title,overview)

  return (
    <div>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContianer