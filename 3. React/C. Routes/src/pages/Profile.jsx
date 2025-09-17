import { useParams } from "react-router-dom"

export const Profile = () => {

    const { userid } = useParams();

    return(
        <>
            <h1>Profile {userid}</h1>
        </>
    )
}