import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Message from './components/Message'
import Counter from './components/Counter'
import Greet from './components/Greet'
import FunctionClick from './components/FunctionClick'

function App() {

  return (
    <>
      <Greet name = "Victoire" heroName= "Spiderman"/>
      <Greet name = "Ushindi" heroName= "The Rock"/>
      <FunctionClick/>
    </>
  )
}

export default App
