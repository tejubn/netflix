import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContianer from './MainContianer';
import SecondaryContainer from './SecondaryContainer';
const Browse = () => {
  useNowPlayingMovies();
  
  
  return (
    <div className='w-full'>
      <Header/>
      <MainContianer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse