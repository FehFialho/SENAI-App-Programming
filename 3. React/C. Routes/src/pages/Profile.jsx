import { useParams } from "react-router-dom"

export const Profile = () => {

    const { userid } = useParams();
    const id = parseInt(userid);

    const users = [1,2,4,5,6,7];
    const isValid = users.includes(id);
    
    // for (let i = 0; i < users.length; i++){
    //     if (users[i] == id)
    //         isValid = true;
    //         break;
    // }

    if (isValid === false) {
        return <h1>Acesso negado</h1>;
    }

    return(
        <>
            {/* Exercise 1 */}
            <h1>Profile {id}</h1>

            {/* Exercise 3 */} {id === 1 ? 
            (
                <h3>Admin Access</h3>
            ) : 
            (
                <h3>User Access</h3>
            ) }
        </>
    )
}