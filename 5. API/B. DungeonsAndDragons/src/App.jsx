import { useState } from 'react'
import './App.css'
import { Home } from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ListMonsters } from './pages/ListMonsters'

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

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
