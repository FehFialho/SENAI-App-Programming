import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export const ListMonsters = ()=>{

    const [monsters, setMonsters] = useState([])
    const navigate = useNavigate()

    const getMonsters = async () => {
        const response = await axios.get('https://www.dnd5eapi.co/api/monsters/')
        console.log(response.data.results)
        setMonsters(response.data.results)
    }

    useEffect(() => {
        getMonsters();
    }, [])


    const viewMonsterInfo = (monster) => {
        navigate('/info', {state: {monster}})
    }

    return(
        <div className="bg-amber-200">
            <h1 className="bg-yellow-500 text-white text-center p-3 mb-2">Monsters Wiki</h1>
            <ul className="flex flex-col w-screen items-center justify-center min-h-scree">
                {monsters.map(monster => (
                <li 
                    key={monster.index}
                    className="justify-center list-none cursor-pointer my-2"
                    style={{ listStyle: "none", cursor: 'pointer' }}
                    onClick={() => viewMonsterInfo(monster)}
                >
                    {monster.name}
                </li>
                ))}
            </ul>
            <Link to={`/`}> <button style={{margin:'2rem'}}>Go Home</button> </Link>
        </div>
    )
}