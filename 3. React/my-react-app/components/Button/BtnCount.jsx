import { useState } from "react";

export function BtnCount(){
    const [ count, setCount] = useState(0)

    return(
        <>
            <button onClick={() => {setCount(count => count+= 1)}} >Cookie Clicker! ({count})</button>
        </>
    )
}