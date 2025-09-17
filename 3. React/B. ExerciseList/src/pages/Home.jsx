import { useNavigate } from "react-router-dom"
import { Header } from "./Header"

export const Home = () => {
    
    const navigate = useNavigate()

    const handleNavigate = () =>{
        alert("Alertando!")
        navigate('/')
    }
    
    return(
        <>
            <Header></Header>
            <h1>Página Inicial</h1>
            <button onClick={handleNavigate}></button>
        </>
    )
}