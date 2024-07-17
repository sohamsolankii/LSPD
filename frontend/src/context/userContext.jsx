import React, {createContext, useState, useEffect} from 'react'
import axios from 'axios'

export const UserContext = createContext({})

export function UserContextProvider({children}) {
    const [user, setUser] = useState(null)

    useEffect(() => {
        if (!user) {
            axios
                .get('/profile')
                .then(({data}) => {
                    setUser(data)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }, []) // we can set user as dependency

    const logout = async () => {
        try {
            await axios.post('/api/v1/auth/logout')
            setUser(null)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <UserContext.Provider value={{user, setUser, logout}}>
            {children}
        </UserContext.Provider>
    )
}
