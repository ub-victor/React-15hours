import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Person = (props) => {
  return(
    <>
    <h1>Name : {props.name}</h1>
    <h2>Last name : {props.ln  }</h2>
    <h2>Age: {props.age}</h2>
    </>
  )
}

function App() {
  return (
    <div>
      <Person
       name={'Ushindi'}
       ln={'victoire'} 
       age={30}/>
      <Person/>
      
    </div>
  )
}

export default App