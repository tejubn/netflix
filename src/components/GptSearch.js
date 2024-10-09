import React from 'react'
import SearchBarGpt from './SearchBarGpt'
import GptMovieSuggest from './GptMovieSuggest'

const GptSearch = () => {
  return (
    <div>
        <SearchBarGpt/>
        <GptMovieSuggest/>
    </div>
  )
}

export default GptSearch