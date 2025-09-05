import { useEffect, useState } from "react"

export const EvenOdd = () => {
    const [num, setNum] = useState(0)
    const [type, setType] = useState()

    useEffect(() => {
        const interval = setInterval(() => {
            setNum(prev => prev + 1);
            if (prev % 2 == 0){
                setType('Even')
            } else{
                setType('Odd')
            }
        }, 1000);
    
        return () => clearInterval(interval);
    }, []);
    
    return (
        <>
            <p>The number is {type}</p>
            <p>{num}</p>
        </>
    )
}