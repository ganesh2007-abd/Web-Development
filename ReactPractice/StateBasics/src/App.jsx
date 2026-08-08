import { useState } from 'react'
import Counter from './counter'
import './App.css'
import InitialiserDemo from './InitialiserDemo'
import ScoreKeeper from './ScoreKeeper'
import EmojiClicker from './emojiClicker'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <InitialiserDemo /> */}
      <ScoreKeeper />
      {/* <EmojiClicker /> */}
    </>
  )
}

export default App
