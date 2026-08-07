import { useState } from 'react'
import Counter from './counter'
import './App.css'
import InitialiserDemo from './InitialiserDemo'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <InitialiserDemo />
    </>
  )
}

export default App
