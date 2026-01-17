import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Fiction from './components/Fiction'
import NonFiction from './components/NonFiction'

function App() {

  const [toggle,setToggle] = useState(false)

  return (
    <>
     <div>
      <h1>Mini Book Store</h1>

      <button data-testid="toggle-btn" onClick={()=>setToggle(!toggle)}> {toggle ? "Show Fiction Book" : "Show Non Fiction Book"} </button>

      <div data-testid="conditional-container">

          {toggle ? <NonFiction/> : <Fiction/>}
        {/* <Fiction/> */}
      </div>
    </div>

    </>
  )
}

export default App
