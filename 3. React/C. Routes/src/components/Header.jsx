import { useState } from "react"
import { Link } from "react-router-dom"

export const Header = () => {

    const [prop1, setProp1] = useState("");
    const [prop2, setProp2] = useState("");

    return(
        <>
            <section  style={{ display: "flex", gap: "15px", marginBottom: "20px"}}>
                <input 
                    style={{ padding: "5px 10px" }}
                    id="input-prop1"
                    type="text"
                    placeholder="First Parameter"
                    value={prop1}
                    onChange={(v) => setProp1(v.target.value)}
                />

                <input 
                    style={{ padding: "5px 10px" }}
                    id="input-prop2"
                    type="text"
                    placeholder="Second Parameter"
                    value={prop2}
                    onChange={(v) => setProp2(v.target.value)}
                />
            </section>

            <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>

                <Link to={`/user/${prop1}`}>
                    <button>1. User (id)</button>
                </Link>
                
                <Link to={`/product/${prop2}/${prop1}`}>
                    <button>2. Product (id/category)</button>
                </Link>
                
            </div>
        </>
    )
}