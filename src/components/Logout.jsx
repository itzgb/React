import { Navigate } from "react-router-dom";
import {useContext, useHistory} from "react";
import AuthContext from "./AuthProvider";
const Logout = () => {
    const {setAuth} = useContext(AuthContext)
    const logout =() => {
        if(localStorage.getItem('token')){

            localStorage.clear();
            setAuth({})
        }
    }
    return (
        <>
        {logout()}
        
        <Navigate to='/login' replace />
        </>
    )
}

export default Logout;