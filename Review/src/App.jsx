import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState(0)
  const [text, setText] = useState("")
  const [show, setShow] = useState(false)

  useEffect(() => {
    console.log("Testing UseEffect");
  }, [value])

  return (
    <>
      <input type="text" onChange={(e) => setText(e.target.value)}/>
      <h1>{text}</h1>
      <button onClick={() => setValue(value + 1)}>{value}</button>

      <br />
      <button onClick={() => setShow(!show)}>Change Visibility</button>
      {
        show &&
        <h1>Secret Content</h1>
      }
    </>
  )
}

export default App
