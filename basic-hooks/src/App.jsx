import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] =useState(4)


  return (
   <>

      <button type="">+</button>
      <span>{count}</span>
      <button type="">-</button>
    </>
  )
}

export default App