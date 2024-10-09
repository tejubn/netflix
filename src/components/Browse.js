import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContianer from './MainContianer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  const showGptSearch=useSelector((store)=>store.gpt.gptSearchState)
  // console.log(showGptSearch)
  return (
    <div className='w-full'>
      <Header/>
    {showGptSearch?<GptSearch/>:   <>   <MainContianer/>
      <SecondaryContainer/></>}  
 
    </div>
  )
}

export default Browse