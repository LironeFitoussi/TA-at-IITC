import { useState, createContext, useContext, useEffect } from 'react'
import type { ReactNode } from 'react'
import type { User } from '../types'
import axios from 'axios'

type AuthCotextType = {
    user: User | null;
    fetchUser: (id?: string) => Promise<void>;
}

export const AuthContext = createContext<AuthCotextType | undefined>(undefined);


export function AuthProvider({ children }: { children: ReactNode}) {
    const [user, setUser] = useState< User | null>(null)

    const fetchUser = async ( id: string = "1" ) => {
      const res = await axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`);
      setUser(res.data);
    };
  

    useEffect(() => {
      fetchUser();
    }, [])
  
    return (
        <AuthContext.Provider value={{user, fetchUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(AuthContext);
    if (context === undefined)  throw new Error("useUser must be used within a UserProvider");

    return context;
  };