import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Person = (props) => {
  return(
    <>
    <h1>Name :</h1>
    <h2>Last name :</h2>
    </>
  )
}

function App() {
  const name = 'Victoire';
  return (
    <div>
      <p>Hello, World</p>
      <Person/>
      {name ?(
        <>
        test {name}
        </>
      ):(
        <>
        <h1>Test</h1>
        <h2>There is no name</h2>
        <h2>Age:</h2>
        </>
      )}
    </div>
  )
}

export default App