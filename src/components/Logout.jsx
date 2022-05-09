import { Navigate } from "react-router-dom";
import {useHistory} from "react";
const Logout = () => {
    
    const logout =() => localStorage.clear();   
    return (
        <>
        {logout()}
        < Navigate to='/login' replace />
        </>
    )
}

export default Logout;