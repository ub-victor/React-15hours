import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const name = null;
  return (
    <div>
      <p>Hello, World</p>
      {name ?(
        <>
        test
        </>
      ):(
        <>
        <h1>Test</h1>
        <h2>There is no name</h2>
        </>
      )}
    </div>
  )
}

export default App
