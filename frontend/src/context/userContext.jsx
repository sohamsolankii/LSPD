import React, {createContext, useState} from 'react'

export const UserContext = createContext()

export function UserContextProvider({children}) {
    const [user, setUser] = useState(null)
    const [passkey, setPasskey] = useState(new Array(6).fill('')) 

    return (
        <UserContext.Provider value={{user, setUser, passkey, setPasskey}}>
            {children}
        </UserContext.Provider>
    )
}
