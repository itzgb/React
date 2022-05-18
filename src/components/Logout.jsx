import { Navigate } from "react-router-dom";
import {useContext, useHistory} from "react";
import AuthContext from "./AuthProvider";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";
const Logout = () => {
    const {setAuth} = useContext(AuthContext)
    const dispatch = useDispatch();
    const logout =() => {
        if(localStorage.getItem('token')){

            localStorage.clear();
            setAuth({})
            dispatch(authActions.logout());
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