import { useState } from 'react'
import './App.css'
import { Home } from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ListMonsters } from './pages/ListMonsters'
import { MonsterInfo } from './pages/MonsterInfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>

          {/* Default */}
          <Route path='/' element={<Home></Home>}></Route>

          {/* Monster List */}
          <Route path='/monsters' element={<ListMonsters></ListMonsters>}></Route>
          
          {/* Monster Info */}
          <Route path="/info" element={<MonsterInfo/>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
