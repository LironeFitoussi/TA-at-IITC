import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import axios from 'axios'

type User = {
    id: string,
    username: string
}

// Define the context type
type AuthContextType = {
    user: User
    logInUser: (username: string, password: string) => void
    fetchUser: () => void
}

// Create the context
export const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Theme provider component
export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState({
        id: "",
        username: ""
    })

    const logInUser = async (username: string, password: string) => {
        const { data } = await axios.post('http://localhost:3001/api/auth/sign-in', {
            username,
            password
        })

        localStorage.setItem('token', data.token)
        fetchUser()
    }

    const fetchUser = async () => {
        try {
            const token = localStorage.getItem('token')
            if (!token) return
            const { data } = await axios.get('http://localhost:3001/api/auth/me', {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })

            setUser(() => data.user)
        } catch (error: any) {
            throw new Error("an error", error);
        }
    }

    useEffect(() => {
        fetchUser()
    }, [])
    return (
        <AuthContext.Provider value={{ user, logInUser, fetchUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("BABA")
    }
    return context
}