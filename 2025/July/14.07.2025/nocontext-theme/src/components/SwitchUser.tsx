import { useUser } from "../contexts/AuthContext"

export function SwitchUser () {
    const { fetchUser } = useUser()

    return (
        <button onClick={() => {
            return fetchUser(String(Math.floor(Math.random() * 10) + 1)) 
        }}>
            Change ro random user
        </button>
    )
}