import React, { createContext, ReactNode, useCallback, useEffect, useState} from 'react'
import { UserService } from '../services';
import { User } from '../types'


export type AuthContextValues = {
    isAuthenticated: boolean,
    user: User.User | null,
    authenticate: (user: User.User) => void,
    logout: () => void;
}

const AuthContext = createContext<AuthContextValues>({} as AuthContextValues);

type authContextProviderProps = {
    children: ReactNode
}


const AuthContextProvider: React.FC<authContextProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User.User | null>(null);

    useEffect(() => {
        let currUserJSON = localStorage.getItem("user");

        console.log('curr user json type:', typeof(currUserJSON))

        if (currUserJSON && !user) {
            let currUser = JSON.parse(currUserJSON);
            let currUserObject = {
                'surname': currUser['surname'],
                'name': currUser['name'],
                'id': currUser['id']
            }

            console.log('curr user object:',currUserObject)

            setUser(currUserObject);
        }
        console.log('inside auth context provider useEffect, currUserJSON = ', currUserJSON)
        console.log('inside auth context provider useEffect, user = ', user)

        
    }, [user])

    const logout = useCallback(async () => {
        console.log("Inside logout callback");
        console.log("user:", user)
        localStorage.removeItem("user")

        if (!user || !user.id) return;

        let result = await UserService.DeleteUser(user?.id)
        console.log("result delete:", result)
        
        setUser(null);
      }, [user, setUser]);

    const authenticate = useCallback((newUser: User.User) => {
        console.log("Inside authenticate callback")
        console.log('user:', newUser)
        
        setUser(newUser)
        localStorage.setItem("user", JSON.stringify(newUser))
        console.log("user:", user)
    }, [setUser])

    var contextValues = {
        isAuthenticated: !!user,
        user: user,
        logout: logout,
        authenticate: authenticate
    };

    return (
        <div>
            <AuthContext.Provider value={contextValues}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export { AuthContext, AuthContextProvider };