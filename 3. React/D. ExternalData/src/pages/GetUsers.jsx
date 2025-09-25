import axios from "axios";
import { useEffect, useState } from "react"

export const GetUsers = () => {

    const [user, setUser]  = useState([])

    useEffect(() => {
        getUsers();
    })

    const getUsers = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(response.data)
        console.log(response.data)
    }

    return(
        <>
            <h1>TEST</h1>
        </>
    )
}