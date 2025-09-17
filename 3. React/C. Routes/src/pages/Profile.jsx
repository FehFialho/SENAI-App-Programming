import { useParams } from "react-router-dom"

export const Profile = () => {

    const { userid } = useParams();

    return(
        <>
            {/* Exercise 1 */}
            <h1>Profile {userid}</h1>

            {/* Exercise 3 */}
            {userid === "1" ? 
            (
                <h3>Admin Access</h3>
            ) : 
            (
                <h3>User Access</h3>
            ) }
        </>
    )
}