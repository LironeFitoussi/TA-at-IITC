import { useState } from "react"
import { useAuth } from '../contexts/AuthContext'

export default function MainPage() {
    const [userName, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const { user, logInUser } = useAuth()

    return (
        <div>
            {user.id ? <p>the user is {user.username}, id: {user.id}</p> : <form>
                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    id="username"
                    style={{ display: "block", marginBottom: "8px" }}
                    onChange={e => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    id="password"
                    style={{ display: "block", marginBottom: "8px" }}
                    onChange={e => setPassword(e.target.value)}
                />
                <button
                    type="button"
                    onClick={() => logInUser(userName, password)}
                >
                    Login
                </button>
            </form>}
        </div>
    )
}