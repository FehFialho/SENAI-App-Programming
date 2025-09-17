import { useState } from "react"
import { Link } from "react-router-dom"

export const Header = () => {

    const [parameter, setParameter] = useState("");

    return(
        <>
            <input 
                id="parameter"
                type="text"
                placeholder="Parameter Here"
                value={parameter}
                onChange={(v) => setParameter(v.target.value)}
            />

            <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>

                <Link to={`/user/${parameter}`}>
                    <button>Exercise 1</button>
                </Link>

                {/* <Link to="/ex2"><button>Exercício 2</button></Link>
                <Link to="/ex3"><button>Exercício 3</button></Link> */}
            </div>
        </>
    )
}