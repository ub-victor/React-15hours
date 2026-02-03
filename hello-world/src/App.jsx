import React, { useEffect, useState } from 'react'
import Search from './components/Search'

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const fecthMovies = async()=>{
    try{

    } catch(error){
      console.log(`error.message`)
    }
  }

  useEffect(()=>{

  },[]);

  return (
    <main>
      <div className='pattern'/>

      <div className='wrapper'>
        <header>
          <img src="./hero.png" alt="Hero banner" />
          <h1>Find <span className='text-gradient'>Movies</span> you'll Enjoy without the Hassle</h1>
        </header>

      <Search searchTerm={searchTerm} setSearchTerm= {setSearchTerm}/>
      <h1>{searchTerm}</h1>
      </div>
    </main>
  )
}

export default App
