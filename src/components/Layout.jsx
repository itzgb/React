import { useContext } from "react";
import { Outlet } from "react-router-dom";
import AuthContext from "./AuthProvider";
import Navbar from "./Navbar";
import { ToastContainer, toast } from 'react-toastify';
const Layout = () => {
    const {auth} = useContext(AuthContext);
    return (
        <main className = "App">
            
            <Navbar auth={auth}  ></Navbar>
            <Outlet />
            
            
        </main>
    )
}

export default Layout