import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>{count}</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          count +
        </button>
        <button onClick={()=> setCount(0)}>reset count</button>
        <button onClick={()=> setCount((count)=> count - 1)}>count -</button>
    </div>
  )
}

export default App
