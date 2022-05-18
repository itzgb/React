import {  Link } from "react-router-dom";
import {useContext, useEffect, useState} from 'react'; 
import {getToken} from '../auth/auth';
import AuthContext from "./AuthProvider";
import { useSelector } from "react-redux";
const Navbar = ({auths}) => {
         
        const {auth , setAuth} = useContext(AuthContext);
        const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
        const user = useSelector(state => state.auth.user);
        
        return (
            <>
            <div>
                    <div className="nav-bar">
                        <nav className="navbar navbar-expand navbar-dark bg-dark">
                            <Link to={"/"} className="navbar-brand">
                                WebApp
                            </Link>
                            <div className="navbar-nav ">
                                <li className="nav-item">
                                    <Link to={"/"} className="nav-link">
                                        Home
                                    </Link>
                                </li>
                            </div>
                            <div className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link to={"/genre"} className="nav-link">
                                        Genres
                                    </Link>
                                </li>
                            </div>
                            {/* {authButton} */}
                            
                            {isLoggedIn ? 
                            
                            <div className="navbar-nav ml-auto">
                                {user.role==="SELLER" && 
                                    <li className="nav-item" >
                                        <Link to={"/seller/manage"} className="nav-link" >
                                        Manage
                                        </Link>
                                    </li>
                                }
                                {user.role==="ADMIN" && 
                                    <li className="nav-item" >
                                        <Link to={"/admin/manage"} className="nav-link" >
                                         Manage
                                        </Link>
                                    </li>
                                }
                                <li className="nav-item" >
                                    <Link to={"/order"} className="nav-link" >
                                      Orders
                                    </Link>
                                </li>
                                <li className="nav-item" >
                                    <Link to={"/cart"} className="nav-link" >
                                    <i className="fas fa-shopping-cart"></i>Cart
                                    </Link>
                                </li>
                                <li className="nav-item" >
                                    <Link to={"/logout"} className="nav-link"  >
                                     Logout
                                    </Link>
                                </li>
                            </div>

                            :
                            <div className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link to={"/login"} className="nav-link">
                                    Login
                                    </Link>
                                </li>
                    
                                <li className="nav-item">
                                    <Link to={"/signup"} className="nav-link">
                                    Sign Up
                                    </Link>
                                </li>
                            </div>

                            }
                            
                        </nav>
                    </div>
                </div></>
        );
    
}
 
export default Navbar;

