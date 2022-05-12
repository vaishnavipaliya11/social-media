import { createContext , useContext} from "react";
import { useState } from "react";

const AuthContext = createContext()

const AuthProvider = ({children}) =>{
    const [auth, setAuth] = useState(localStorage.getItem("token") ? true:false)
    
    return(
        <AuthContext.Provider value={{auth,setAuth}}>
        {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext (AuthContext)


export {useAuth, AuthProvider}