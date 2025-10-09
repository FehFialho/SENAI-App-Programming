import axios from 'axios'
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

export const Cat = () => {
    const [cat, setCat] = useState({})

    const getCat = async () => {
        const response = await axios.get('https://cataas.com/cat')
        setCat(response.data)
        console.log(response.data)
    }

    useEffect(() => {
        getCat()
    }, [])

    return (
        <>
            {cat.url && <img src={cat.url} alt="Cat" />}
            {/* <img src={cat.url} alt="Cat" /> */}
            <button onClick={getCat}>Get Cat</button>
            <Link to={`/`}> <button>Go Home</button> </Link>
        </>
    )
}