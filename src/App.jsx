import { useState } from 'react'
import './App.css'
import Timer from './Timer'
import Browser from './Browser'

function App() {

  let [flag, setFlag] = useState(true)
  let [seconds, setSeconds] = useState(0)
  let [config, setConfig] = useState({})
  
  return (
    <>
    <button onClick={() => setFlag(!flag)}>Click me to render {flag ? "BrowserEvent" : "Timer"}</button>
    {flag ? <Timer seconds={seconds} setSeconds={setSeconds}/> : <Browser config={config} setConfig={setConfig}/> }
    </>
  )
}

export default App
