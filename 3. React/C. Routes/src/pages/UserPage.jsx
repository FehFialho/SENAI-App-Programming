import { useParams } from "react-router-dom"

export const UserPage = () =>  {

    const {id} = useParams();

    return (
        <h3>You are at the User {id} page!</h3>
    )
}