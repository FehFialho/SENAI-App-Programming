import { useState } from "react"

export const Counter = () => {
    const [count, setCount] = useState(0)

    return (
        <>
            <h3>{count}</h3>
            <div>
                <button onClick={() => setCount(count + 1)}>+</button>
                <button onClick={() => count === 0 ? 0 : setCount(count - 1)}>-</button>
            </div>
        </>
    )
}