import { useUser } from "../contexts/AuthContext"

export function UserHero () {
    const user = useUser()

    // console.log(user);
    
    return (
        <div className="user-hero">
            <h2>{user.user?.name[0]}</h2>
        </div>
    )
}