import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=7b5751eb';


function App() { 
  useEffect (()=>{

  }, []);
  return (
    <div>
      <button onClick={()=> setCounter((prevCount)=> prevCount -1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={()=> setCounter((nextCount)=> nextCount +1)} >+</button>
    </div>
  )
}

export default App