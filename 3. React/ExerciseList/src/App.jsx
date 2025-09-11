// src/App.jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { Ex1 } from "./pages/Ex1"
import { Ex2 } from "./pages/Ex2"
import { Ex3 } from "./pages/Ex3"

export const App = () => {
  return (
    <BrowserRouter>
      {/* Cabeçalho com botões */}
      <header style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <Link to="/ex1"><button>Exercício 1</button></Link>
        <Link to="/ex2"><button>Exercício 2</button></Link>
        <Link to="/ex3"><button>Exercício 3</button></Link>
      </header>

      {/* Rotas */}
      <Routes>
        <Route path="/" element={<Ex1 />} /> {/* Rota padrão */}
        <Route path="/ex1" element={<Ex1 />} />
        <Route path="/ex2" element={<Ex2 />} />
        <Route path="/ex3" element={<Ex3 />} />
      </Routes>
    </BrowserRouter>
  )
}
