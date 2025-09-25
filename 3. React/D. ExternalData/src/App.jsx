import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Cat } from './pages/Cat'
import { Home } from './pages/Home'
import { ListUsers } from './pages/ListUsers'
import { Profile } from './pages/Profile'

function App() {

  return (
    <BrowserRouter>
      <Routes>

        {/* Default */}
        <Route path='/' element={<Home></Home>}></Route>

        {/* Cat API Exercise*/}
        <Route path='/cat' element={<Cat></Cat>}></Route> 

        {/* Users API Exercise*/}
        <Route path='/users' element={<ListUsers></ListUsers>}></Route> 
        <Route path='/profile' element={<Profile></Profile>}></Route> 

      </Routes>
    </BrowserRouter>
  )
}

export default App
