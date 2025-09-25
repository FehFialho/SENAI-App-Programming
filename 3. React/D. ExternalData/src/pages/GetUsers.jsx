import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export const GetUsers = () => {

    const [user, setUser] = useState([])

    useEffect(() => {
        getUsers();
    })

    const getUsers = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(response.data)
        setUser(response.data)
    }

    return(
        <>
            <h1>Registred Users</h1>
            {
                user.map(user => (
                    <li style={{ listStyle: "none"}} key={user.id}>
                    {user.id} - {user.name}
                    </li>
                ))
            }
            <Link to={`/`}> <button style={{margin:'2rem'}}>Go Home</button> </Link>
        </>
    )
}