import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SearchIcon from './search.svg'
import './App.css'
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=7b5751eb';


function App() { 
  useEffect(() => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    console.log(data.Search);
  }

  searchMovies("Batman")
  }, [])

  return (
   <div className='app'>MovieLand</div>
  )
}

export default App