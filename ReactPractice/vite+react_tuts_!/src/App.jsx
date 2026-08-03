// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import Greeter from "./greeter"
import DieRoll from './dieroll'
import ListPicker from './listpick'
import Conditionals from './conditionals'
import UseMap from './mapusage'

function App() {
  return (
    <>
      {/* <Greeter name="ganesh" />
      <Greeter name="sups" from="ganesh" />
      <DieRoll numSides={10} />
      <DieRoll numSides={5} />
      <DieRoll /> */}
      {/* <ListPicker values={[12, 3, 5]} /> */}
      {/* <Conditionals />
      <Conditionals />
      <Conditionals />
      <Conditionals /> */}
      <UseMap colors={['green', 'orange', 'red']} />
    </>
  )
}

export default App
