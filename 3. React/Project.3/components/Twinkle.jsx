import { useState, useEffect } from "react"

export const Twinkle = () => {
    const [color, setColor] = useState('navy')

    useEffect(() => {
        const timer = setTimeout(() => {
            if (color === 'navy') {
                setColor('brown')
            } else {
                setColor('navy')
            }
        }, 200)

        return () => clearTimeout(timer)
    }, [color])

    return (
        <div
            style={{
                width: '100px',
                height: '100px',
                backgroundColor: color
            }}
        />
    )
}
