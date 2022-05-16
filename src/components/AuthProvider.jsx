import {createContext , useEffect, useState} from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth,setAuth] = useState({});
    useEffect(()=>{
        const elem = localStorage.getItem('user');
        console.log("elem",elem) 
        if(elem){
            console.log("lgo it")
            setAuth({role:elem.replaceAll('"','')})
        }
    },[])
    return(
        <AuthContext.Provider value={{auth , setAuth}} >
            
            {children}
            
        </AuthContext.Provider>
    )
}

export default AuthContext;