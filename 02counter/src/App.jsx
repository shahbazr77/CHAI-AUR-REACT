import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'




function App() {
  let [counter,setCounter]=useState(15);

const addValue = () => {  
 if(counter<=19){ 
//es sorat main ak hi value change ho gi  
 setCounter(counter+1);
 setCounter(counter+1);
 setCounter(counter+1);
 setCounter(counter+1);

//es sorat main 4 value change ho gi
//  setCounter(prevCounter => prevCounter+1);
//  setCounter(prevCounter => prevCounter+1);
//  setCounter(prevCounter => prevCounter+1);
//  setCounter(prevCounter => prevCounter+1);

 }else{
  alert("Counter value cannot be greater than 20");
 }
}

const minusValue = () =>{
  if(counter>=1){
  setCounter(counter-1);
  }else{
    alert("Counter value cannot be less than 0");
  }
}


  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter value: {counter}</h2>
    <button
    onClick={addValue}
    >Add value {counter}</button>
    <br/>
    <br/>
    <button
    onClick={minusValue}
    >Remove value {counter}</button>
    <footer>footer {counter}</footer>
    </>
  )
}

export default App
