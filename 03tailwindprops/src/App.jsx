import { useState } from 'react'
import Card from './components/Card'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let myObj ={
    username: "John Doe",
    age: 30,
  }

  let newArr = [1,2,3,4,5];
 

  return (
    <>
     <h1 className='bg-green-400 text-black text-center p-4 rounded-3xl'>TailwindTest</h1>
      <Card planname="Basic Plan" btnText="Start Basic" />
      <Card planname="Pro Plan"  />
    </>
  )
}

export default App
