import { Link } from "react-router-dom"

export const Header = () => {
    return(
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
            <Link to="/ex1"><button>Exercício 1</button></Link>
            <Link to="/ex2"><button>Exercício 2</button></Link>
            <Link to="/ex3"><button>Exercício 3</button></Link>
        </div>
    )
}