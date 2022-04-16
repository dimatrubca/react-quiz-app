import React, { createContext, useCallback, useEffect, useState} from 'react'
import { User } from '../types'


export type AuthContextValues = {
    isAuthenticated: boolean,
    user: User.User | null,
    setUser: React.Dispatch<React.SetStateAction<User.User | null>>;
}

const AuthContext = createContext<AuthContextValues>({} as AuthContextValues);


const AuthContextProvider: React.FC = (props: any) => {
    const [user, setUser] = useState<User.User | null>(null);

    var contextValues = {
        isAuthenticated: !!user,
        user: user,
        setUser: setUser
    };

    return (
        <div>
            <AuthContext.Provider value={contextValues}>
                {props.children}
            </AuthContext.Provider>
        </div>
    )
}

export { AuthContext, AuthContextProvider }