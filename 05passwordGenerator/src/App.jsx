import { useState ,useCallback,useEffect,useRef} from 'react'
import './App.css'

function App() {
 
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password,setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+~`|}{[]:;?><,./-="

    for (let i = 0; i < length; i++){
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);

  },[length,numberAllowed,charAllowed,setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, password.length);
    window.navigator.clipboard.writeText(password);
  },[password]);


  useEffect(() => {
    passwordGenerator();
  }, [length,numberAllowed,charAllowed,passwordGenerator]);




  return (
    <>
    <div className='w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800 text-weight-bold'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type='text' value={password} className='outline-none w-full py-1 px-3 bg-white' placeholder='Password' readOnly ref={passwordRef} />
        <button className='outline-none bg-blue-700 text-white px-3 py-05 shrink-0 cursor-pointer hover:bg-blue-800 active:scale-95 shadow-md hover:shadow-lg  transition duration-200' onClick={copyPasswordToClipboard}>
          Copy
        </button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type ='range' min={6} max={100} value={length} onChange={(e) => setLength(e.target.value)} />
          <label>Length: {length}</label> 
        </div>
        <div className='flex items-enter gap-x-1'>
          <input 
          type='checkbox'
          id='numberInput'
          defaultChecked={numberAllowed}
          onChange={()=>{
            setNumberAllowed((prev) => !prev);
          }}
          />
          <label htmlFor='numberInput'>Numbers</label>
        </div>

        <div className='flex items-enter gap-x-1'>
          <input 
          type='checkbox'
          id='charInput'
          defaultChecked={charAllowed}
          onChange={()=>{
            setCharAllowed((prev) => !prev);
          }}
          />
          <label htmlFor='charInput'>Characters</label>
        </div>
      </div>
     
    </div>
    </>
  )
}

export default App
