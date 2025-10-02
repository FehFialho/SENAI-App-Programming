import { Link } from "react-router-dom"

export const Header = () => {
    return(
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>

            <Link to={`/`}>
                <button>Home</button>
            </Link>

        </div>
    )
}