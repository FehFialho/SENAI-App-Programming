import { useParams } from "react-router-dom"

export const Exercise = () => {
    const {number} = useParams();

    return (
        <>
            <h1>Exercício {number}</h1>
        </>
    )
}