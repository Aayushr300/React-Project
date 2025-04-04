import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [value,setValue]  = useState(15);
  // let value = 5;// declare a variable


  const addValue = ()=>{
    value = value + 1;
    setValue(value);
  }

  const removeValue = ()=>{
    value = value - 1;
    setValue(value)
  }


  return (

    <>
      <h1>Chai or code</h1>
      <h2>Counter Value :{value}</h2>

      <button onClick={addValue}>Add Value</button><br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
