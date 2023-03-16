import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] =useState(4)

  function decrementCount() {
    setCount(count -1 )
    
    
  }

  function  incrementCount() {
    setCount(count +1)
    
  }
  return (
   <>

      <button onClick={incrementCount} >+</button>
      <span>{count}</span>
      <button onClick={decrementCount}>-</button>
    </>
  )
}

export default App
