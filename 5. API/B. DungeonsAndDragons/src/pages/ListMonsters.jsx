import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export const ListMonsters = ()=>{

    const [monster, setMonster] = useState([])
    const navigate = useNavigate()

    const getMonster = async () => {
        const response = await axios.get('https://www.dnd5eapi.co/api/monsters/')
        console.log(response.data.results)
        setMonster(response.data.results)
    }

    useEffect(() => {
        getMonster();
    }, [])


    const viewMonsterInfo = (monster) => {
        navigate('/info', {state: {monster}})
    }

    return(
        <>
            <h1>Monsters Wiki</h1>
            {
                monster.map(monster => (
                    <li style={{ listStyle: "none", cursor:'pointer' }} key={monster.index} onClick={()=> viewMonsterInfo(monster)}>
                        {monster.name}
                    </li>
                ))
            }
            <Link to={`/`}> <button style={{margin:'2rem'}}>Go Home</button> </Link>
        </>
    )
}