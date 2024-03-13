import { useState } from 'react'
import Header from './components/Header/Header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h4>{count}</h4>
    <button onClick={()=>setCount(count+1)}>Add +</button>
    </>
  )
}

export default App
