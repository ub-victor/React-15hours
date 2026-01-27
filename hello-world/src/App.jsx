import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Greet from '../src/components/Greet'

function App() {

  return (
    <>
      <Greet name = "Victoire" heroName= "batman">
        <p>This is children props</p>
      </Greet>
      <Greet name = "Ushindi" heroName= "ironman">
        <button>Action</button>
      </Greet>
    </>
  )
}

export default App
