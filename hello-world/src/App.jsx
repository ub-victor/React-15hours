import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Greet from '../src/components/Greet'

function App() {

  return (
    <>
      <Greet name = "Victoire" heroName= "batman"/>
      <Greet name = "Ushindi" heroName= "ironman"/>
    </>
  )
}

export default App
