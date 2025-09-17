import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Profile } from './pages/Profile'
import { Product } from './pages/Product'

function App() {

  return (
    <BrowserRouter>
      <Routes>

        {/* Default */}
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>

        {/* Exercise 1 */}
        <Route path='/user/:userid' element={<Profile></Profile>}></Route> 
        {/* Exercise 2 */}
        <Route path='/product/:category/:id' element={<Product></Product>}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
