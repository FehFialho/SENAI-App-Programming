import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { CharacterList } from './pages/CharacterList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          
          {/* Default */}
          <Route path='/' element={<Home></Home>}></Route>

          {/* Character List */}
          <Route path='/characters' element={<CharacterList></CharacterList>}></Route>
          
          {/* Character Info */}
          {/* <Route path="/bio" element={</>} /> */}

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
