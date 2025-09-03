import { useState } from "react";

export function BtnColor (){
    const [color, setColor] = useState("rebeccapurple")

    return (
        <>
            <div style={{backgroundColor: color}}>
                <h1>Shine</h1>
            </div>
            
            <button onClick={() => {setColor(color == 'rebeccapurple' ? 'darkolivegreen' : 'rebeccapurple')}}>
                Alter Color
            </button>
        </>
    )
}