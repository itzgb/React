import {  Link } from "react-router-dom";
import {useEffect, useState} from 'react'; 
import {getToken} from '../auth/auth';
const Navbar = ({auth}) => {
        const [user,setUser] = useState(auth);
    
        return (
            <><head>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </head>
            <div>
                    <div className="nav-bar">
                        <nav className="navbar navbar-expand navbar-dark bg-dark">
                            <Link to={"/"} className="navbar-brand">
                                WebApp
                            </Link>
                            <div className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link to={"/home"} className="nav-link">
                                        Home
                                    </Link>
                                </li>
                            </div>
                            
                            {localStorage.getItem('token') ? 
                            <div className="navbar-nav ml-auto">
                                <li className="nav-item" >
                                    <Link to={"/order"} className="nav-link" >
                                    Orders
                                    </Link>
                                </li>
                                <li className="nav-item" >
                                    <Link to={"/cart"} className="nav-link" >
                                    <i class="fas fa-shopping-cart"></i>Cart
                                    </Link>
                                </li>
                                <li className="nav-item" >
                                    <Link to={"/logout"} className="nav-link" onClick={(e)=>setUser(false)} >
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


/*                    {showModeratorBoard && (
                    <li className="nav-item">
                        <Link to={"/mod"} className="nav-link">
                        Moderator Board
                        </Link>
                    </li>
                    )}
        
                    {showAdminBoard && (
                    <li className="nav-item">
                        <Link to={"/admin"} className="nav-link">
                        Admin Board
                        </Link>
                    </li>
                    )}
        
                    {currentUser && (
                    <li className="nav-item">
                        <Link to={"/user"} className="nav-link">
                        User
                        </Link>
                    </li>
                    )}
                </div>
        
                {currentUser ? (
                    <div className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to={"/profile"} className="nav-link">
                        {currentUser.username}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a href="/login" className="nav-link" onClick={logOut}>
                        LogOut
                        </a>
                    </li>
                    </div>
                ) : (
                    <div className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to={"/login"} className="nav-link">
                        Login
                        </Link>
                    </li>
        
                    <li className="nav-item">
                        <Link to={"/register"} className="nav-link">
                        Sign Up
                        </Link>
                    </li>
                    </div>
                )}
*/