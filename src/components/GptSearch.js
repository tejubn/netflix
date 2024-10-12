import React from 'react'
import SearchBarGpt from './SearchBarGpt'
import GptMovieSuggestions from './GptMovieSuggestions'

const GptSearch = () => {
  return (
    <div>
        <SearchBarGpt/>
        <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch