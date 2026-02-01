import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import { useState, useEffect } from 'react'
function App() {

  const Card = ({title})=>{
    const [count, setCount] = useState(0)
    const [hasLiked, setHasLiked] = useState(false)
    useEffect(()=>{
      console.log(`${title} has been liked: ${hasLiked}`);
    });
    return (
      <div className='card' onClick={()=> setCount(count + 1)}>
        <h2>{title} <br /> {count}</h2>

        <button onClick={()=> setHasLiked(!hasLiked) }>
          {hasLiked? "❤️": "🤍"}
        </button>
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