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
      console.log(`Error fetching movies: ${error.message}`);
      setErrorMessage(`Error fetching movies. Please try again later.`)
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

          <Search searchTerm={searchTerm} setSearchTerm= {setSearchTerm}/>
        </header>

        <section className='all-movies'>
          <h2>All movies</h2>

          
        </section>

      
      </div>
    </main>
  )
}

export default App
