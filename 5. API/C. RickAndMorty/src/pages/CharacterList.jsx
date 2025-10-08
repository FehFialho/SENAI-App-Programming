import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export const CharacterList = () => {
    const [characters, setCharacters] = useState([])
    const navigate = useNavigate()

    const getCharacters = async () => {
        const response = await axios.get('https://rickandmortyapi.com/api/character')
        console.log(response.data.results)
        setCharacters(response.data.results)
    }

    useEffect(() => {
        getCharacters();
    }, [])

    const viewCharacterInfo = (character) => {
        navigate('/info', {state: {character}})
    }

    return(
        <div className="">
            <h1 className="bg-yellow-500 text-white text-center p-3 mb-2">Rick and Morty Characters</h1>
            <ul className="flex flex-col w-screen items-center justify-center min-h-scree">
                {characters.map(character => (
                <li 
                    key={character.id}
                    className="justify-center list-none cursor-pointer my-2"
                    style={{ listStyle: "none", cursor: 'pointer' }}
                    onClick={() => viewCharacterInfo(character)}
                >
                    {character.name}
                </li>
                ))}
            </ul>
            <Link to={`/`}> <button style={{margin:'2rem'}}>Go Home</button> </Link>
        </div>
    )
}