import { Link, useLocation } from "react-router-dom"

export const Profile = () =>{

    const location = useLocation();
    const { user } = location.state || {};

    if (!user) return <p>User not found.</p>

    return(
        <>
            <section>
                <h2>User Profile</h2>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
            </section>

            <Link to={`/users`}> <button>Go Back</button> </Link>
        </>
    )
}