import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
function App() {

  const Card = ({title})=>{
    return (
      <div style={{
        border: '1px solid #4b5362',
        padding: '10px',
        margin: '10px',
        backgroundColor: '#31363f',
        borderRadius: '10px'
      }}>
        <h2>{title}</h2>
      </div>
    )
  }

  return (
    <div className='card-container'>
      <Card title="Star Wars"/>
      <Card title="Avatar"/>
      <Card title="The Lion King"/>

    </div>
    
  )
}

export default App