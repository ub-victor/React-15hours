import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
function App() {

  const Card = ({title})=>{
    return (
      <div>
        <h2>{title}</h2>
      </div>
    )
  }

  return (
    <div className='card-container'>
      <Card title="Star Wars"/>
      <Card title="Star Wars"/>
      <Card title="Star Wars"/>

    </div>
    
  )
}

export default App
   