import React from 'react'
<<<<<<< HEAD
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
=======

const Browse = () => {
  return (
    <div>Browse</div>
>>>>>>> 53466590d10f2e963122ee7227363570d6a5f0c9
  )
}

export default Browse