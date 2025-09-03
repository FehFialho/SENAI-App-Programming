import { useEffect, useState } from "react";

export function LearnUseEffect(){
    const [num, setNum] = useState(0)

    useEffect(() => {
        console.log("The page content has been changed")
    },[num])

    return (
        <>
            <button onClick={() => setNum(num => num+1)}>Incrementar Num</button>
            <h1>{num}</h1>
        </>
    )
}