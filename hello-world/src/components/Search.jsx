import React from 'react'

const Search = ({searchTerm, setSearchTerm}) => {
  return (
    <div className='search'>
        <div>
            <img src="search.svg" alt="search" />
            <input type="text"
            placeholder= "Search through thousand of movies"
            value = {searchTerm}
            ' />
        </div>
    </div>
  )
}

export default Search
