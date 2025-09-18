import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Squares } from './pages/Squares'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Squares></Squares>}></Route>
      </Routes>
    </BrowserRouter>
    
    // <>
    //   <h1 className='text-blue-500 text-5xl font-bold'>Testing TailWind!</h1>
    //   <div className='h-screen flex justify-center items-center'>
    //     <div className='bg-red-900 w-52 h-52'></div>
    //     <div className='bg-emerald-800 w-52 h-52'></div>
    //   </div>
    // </>
  )
}

export default App
