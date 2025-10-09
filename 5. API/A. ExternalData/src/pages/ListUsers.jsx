import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";

export const ListUsers = () => {

    const [user, setUser] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(response.data)
        setUser(response.data)
    }

    const openUserProfile = (user) => {
        navigate('/profile', {state: {user}})
    }

    return(
        <>
            <h1>Registred Users</h1>
            {
                user.map(user => (
                    <li style={{ listStyle: "none", cursor:'pointer' }} key={user.id} onClick={()=> openUserProfile(user)}>
                    {user.id} - {user.name}
                    </li>
                ))
            }
            <Link to={`/`}> <button style={{margin:'2rem'}}>Go Home</button> </Link>
        </>
    )
}