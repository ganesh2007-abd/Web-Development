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
import Property from './Property'
import Clicker from './Clicker'

function App() {

  // const data = [
  //   { id: 1, item: "eggs", quantity: 32, completed: false },
  //   { id: 2, item: "banana", quantity: 14, completed: true },
  //   { id: 3, item: "chips", quantity: 15, completed: false },
  //   { id: 4, item: "curd", quantity: 10, completed: true },
  // ]

  const properties = [
    { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
    { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
    { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
    { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
    { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
    { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
  ];

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
      {/* <ShoppingList items={data} /> */}
      {/* <Property properties={properties} /> */}
      <Clicker />
    </>
  )
}

export default App
