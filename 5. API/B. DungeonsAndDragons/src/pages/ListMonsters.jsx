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
        <>
            <h1>Monsters Wiki</h1>
            <ul className="flex w-screen items-center justify-center">
                {monsters.map(monster => (
                <li className="justify-center"
                    key={monster.index}
                    style={{ listStyle: "none", cursor: 'pointer' }}
                    onClick={() => viewMonsterInfo(monster)}
                >
                    {monster.name}
                </li>
                ))}
            </ul>
            <Link to={`/`}> <button style={{margin:'2rem'}}>Go Home</button> </Link>
        </>
    )
}