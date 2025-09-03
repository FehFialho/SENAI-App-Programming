import { useState } from "react";

export function ButtonDissapear (){
    const [visibility, setVisibility] = useState(true)

    return (
        <>
            { visibility && // Only appears if visibility var == True
            <div>
                <h1>Content</h1>
            </div>
            }
            <button onClick={() => {setVisibility(visibility == true ? false : true)}}>
                Alter Visibility
            </button>
        </>
    )
}