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
import ShoppingList from './shoppingList'

function App() {

  const data = [
    { item: "eggs", quantity: 32, completed: false },
    { item: "banana", quantity: 14, completed: true },
    { item: "chips", quantity: 15, completed: false },
    { item: "curd", quantity: 10, completed: true },
  ]

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
      {/* <UseMap colors={['green', 'orange', 'red']} /> */}
      <ShoppingList items={data} />
    </>
  )
}

export default App
