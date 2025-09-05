import { useEffect, useState } from "react"

export const EvenOdd = () => {
    const number = [num, setNum] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setNum((num + 1))
        }, 1000);
    })
}