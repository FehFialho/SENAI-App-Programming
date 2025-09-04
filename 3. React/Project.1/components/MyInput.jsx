import { useState } from "react";

export function MyInput (){
    const [text, setText] = useState("")

    return (
        <>
            <input type="text" onChange={(e) => setText(e.target.value)}/>
            <h1>{text}</h1>
        </>
    )
}