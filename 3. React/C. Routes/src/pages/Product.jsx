import { useParams } from "react-router-dom"

export const Product = () => {

    const {id} = useParams();
    const {category} = useParams();

    return(
        <>
            <h1>Store</h1>
            <h1>Product {id} - {category}</h1>
        </>
    )
}