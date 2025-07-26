import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Task Management App</h1>
      <p>Welcome to my real-time task manager!</p>
    </div>
  )
}

export default App
