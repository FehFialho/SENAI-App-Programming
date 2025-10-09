import { useEffect, useState } from 'react'
import './App.css'

function Profile({name, age, color}){
  return(
    <>
      <h1>Name: {name}</h1>
      <h1>Age: {age}</h1>
      <h1>Color: {color}</h1>
    </>
  )
}

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

      <Profile name={"JoyJoy"} age={19} color={"purple"}/>
    </>
  )
}

export default App
