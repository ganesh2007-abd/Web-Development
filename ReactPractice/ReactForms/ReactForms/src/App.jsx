import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import UserName from "./username.jsx"
import SignUpForm from './SignUpForm.jsx'
import BetterSignUpForm from './BetterSignUpForm.jsx'

function App() {


  return (
    <>
      {/* <UserName /> */}
      {/* <SignUpForm /> */}
      <BetterSignUpForm />
    </>
  )
}

export default App
