import { useEffect, useState } from 'react'
import './App.css'
import { Profile } from '../components/Profile'
import { MyButton } from '../components/MyButton'
import axios from 'axios'

function App() {
  const [value, setValue] = useState(0)
  const [text, setText] = useState("")
  const [show, setShow] = useState(false)

  useEffect(() => {
    console.log("Testing UseEffect");
  }, [value])

//https://jsonplaceholder.typicode.com/users -> Array
//https://dog.ceo/api/breeds/image/random -> Objeto

const [dog, setDog] = useState({})
const [users, setUsers] = useState([])

const getDogData = async() => {
  const response = await axios.get("https://dog.ceo/api/breeds/image/random")
  setDog(response.data) // Sempre padrão
  console.log(response.data)
}

const getUsersData = async() => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/users")
  setUsers(response.data)
  console.log(response.data)
}

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

      {/* Props */}
      <Profile name={"JoyJoy"} age={29} color={"purple"}/> 

      <MyButton onClick={() => getDogData()} color={"bg-red-500"} content={"Get Dog"} width={"w-48"} heigth={"h=24"} hover={"bg-red-700"}></MyButton>

      <button onClick={()=> getDogData()}>Get Dog 2 </button>

      <img src={dog.message} alt="Doguinho" />

      <button onClick={()=> getUsersData()}>Get Users</button>
      {
        users.map(user => <><br></br><span>{user.name}</span></>)
      }
    </>
  )
}

export default App

// 
