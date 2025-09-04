import { useState } from "react"

export const Twinkle = () => {

    const [color, setColor] = useState('navy')

    return (
        <div style={{backgroundColor: color == 'navy' ? null : setColor('brown')}}></div>
    )
}