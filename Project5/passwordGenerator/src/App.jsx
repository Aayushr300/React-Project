import { useState , useCallback ,useEffect } from 'react'
import "./App.css"

function App() {
  const [length,setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [characterAllowed, setCharcter] = useState(false);
  const [password,setPassword] = useState("")

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTVUWXYZabcdefghijklmnopqrstuvwxyz";

    if(number) str+= "0123456789";
    if(characterAllowed) str+= "!@#$%^&*(){}_";

    for(let i =1 ;i<=length;i++){
      let char = Math.floor(Math.random()*str.length +1)
      pass += str.charAt(char);
    }
    setPassword(pass);

  }, [length , number ,  characterAllowed ,setPassword ])
useEffect(()=>{
passwordGenerator()
},[length,number,characterAllowed,passwordGenerator])

  return (
    <>
    <div className='flex
    justify-center'>

    
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-blue-500' >
      <h1 className='text-2xl flex justify-center  '>Password Generator</h1>
        <div className='flex space-x-3'>
        <input type="text"
        value={password}
        placeholder='password'
        className='rounded-md w-full my-3 py-1.5 px-3'
        readOnly />
        <button className='bg-sky-500 rounded-md my-3 py-1.5 px-3 text-black '> Copy</button>
        </div>
        
        <div className='flex
        space-x-3'>
         

           <input id="range" 
        type="range"  min={8} max={20} value={length} className='cursor-pointer' onChange={(e)=>{
          setLength(e.target.value)
        }}/>
           <label for="range">Length: {length} </label>
          <input type="checkbox"
           defaultChecked={number}
          id="numberInput" 
          onChange={()=>{
            setNumber((prev)=>!prev);
          }}/>
          <label htmlFor="numberInput">Number</label>
          <input type="checkbox" 
          defaultChecked={characterAllowed}
          id="characterInput"
          onChange={()=>{
            setCharcter((prev)=>!prev);
          }}/>
          
          <label htmlFor="characterInput">Characters</label>
        </div>
       
      </div>
      </div>
    </>
  )
}

export default App
