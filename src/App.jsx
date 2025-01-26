import { useState } from "react"

function App() {

  const[length, setLength]=useState(8);
  const[numAllowed, setNumAllowed] =useState(false);
  const [char, setChar] =useState(false);
  
  return (
    <div >
    <h1 className="text-white text-4xl text-center">Password Generator</h1>
    </div>
  )
}

export default App
