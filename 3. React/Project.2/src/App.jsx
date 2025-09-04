import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../components/Home'
import { About } from '../components/About'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
