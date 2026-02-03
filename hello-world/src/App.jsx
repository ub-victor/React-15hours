import React, { useEffect, useState } from 'react'
import Search from './components/Search'



const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

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
