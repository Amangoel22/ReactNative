import { createContext, useState } from "react";

export const AuthContext = createContext({
    token:'',
    isAuthenticated: false,
    authenticate: () => {},
    logout:{},
});

function AuthContentProvider({children}){
    const [authToken, setAuthToken] = useState();

    function authenticate(){
        setAuthToken(token);
    };

    function logout(){
        setAuthToken(null);
    }

    const value = {
        token: authToken,
        isAuthenticated: !!authToken,
        authenticate: authenticate,
        logout: logout,
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContentProvider;
