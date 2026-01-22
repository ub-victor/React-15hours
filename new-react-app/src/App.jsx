import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <button onClick={()=> setCounter((prevCount)=> prevCount -1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={()=> setCounter((nextCount)=> nextCount +1)} >+</button>
    </div>
  )
}

export default App