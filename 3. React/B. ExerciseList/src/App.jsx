// src/App.jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { Ex1 } from "./pages/Ex1"
import { Ex2 } from "./pages/Ex2"
import { Ex3 } from "./pages/Ex3"
import { Exercise } from "./pages/Exercise"
import { Home } from "./pages/Home"
import { Header } from "./pages/Header"

export const App = () => {
  return (
    <>
        <BrowserRouter>
        {/* Rotas */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Rota padrão */}
          <Route path="/ex1" element={<Ex1 />} />
          <Route path="/ex2" element={<Ex2 />} />
          <Route path="/ex3" element={<Ex3 />} />
          {/* <Route path="/exercise/:number" element={<Exercise/>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}
