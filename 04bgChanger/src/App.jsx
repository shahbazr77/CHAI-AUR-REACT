import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'



function App() {
  const [bodyColor, setBodyColor] = useState('olive');

  return (
    <>
    <div id="main-color-dev" className='w-full h-screen duration-200' style={{backgroundColor: bodyColor}}>

       <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
         <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={() => setBodyColor('red')} className='outline-none px-4  py-1 rounded-full text-black shadow-lg ' style={{background:"red"}} >Red</button>
          <button onClick={() => setBodyColor('green')} className='outline-none px-4  py-1 rounded-full text-black shadow-lg ' style={{background:"green"}} >Green</button>
          <button onClick={() => setBodyColor('blue')} className='outline-none px-4  py-1 rounded-full text-black shadow-lg ' style={{background:"blue"}} >Blue</button>
          <button onClick={() => setBodyColor('yellow')} className='outline-none px-4  py-1 rounded-full text-black shadow-lg ' style={{background:"yellow"}} >Yellow</button>
          <button onClick={() => setBodyColor('olive')} className='outline-none px-4  py-1 rounded-full text-black shadow-lg ' style={{background:"olive"}} >Olive</button>
          <button onClick={() => setBodyColor('gray')} className='outline-none px-4  py-1 rounded-full text-black shadow-lg ' style={{background:"gray"}} >Gray</button>
          <button onClick={() => setBodyColor('pink')} className='outline-none px-4  py-1 rounded-full text-black shadow-lg ' style={{background:"pink"}} >Pink</button>
          <button onClick={() => setBodyColor('purple')} className='outline-none px-4  py-1 rounded-full text-black shadow-lg ' style={{background:"purple"}} >Purple</button>
          <button onClick={() => setBodyColor('lavender')} className='outline-none px-4  py-1 rounded-full text-black shadow-lg ' style={{background:"lavender"}} >Lavender</button>
          <button onClick={() => setBodyColor('white')} className='outline-none px-4  py-1 rounded-full text-black shadow-lg ' style={{background:"white"}} >White</button>
          <button onClick={() => setBodyColor('black')} className='outline-none px-4  py-1 rounded-full text-white shadow-lg ' style={{background:"black"}} >Black</button>
         </div>
       </div>
      
    </div>
      
    </>
  )
}

export default App
