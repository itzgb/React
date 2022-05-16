import { useContext, useEffect, useState } from 'react';
import {Link , Navigate} from 'react-router-dom'
import axios from '../axios'

import '../App.css'
import AuthContext from './AuthProvider';
const Login = () => {


    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const [errMsg,setErrMsg] = useState(false) 
    const [success,setSuccess] = useState(false);

    const [currentUser,setCurrentUser] = useState();

    const {setAuth} = useContext(AuthContext);     



    const handleLogin = async (e)=>{
        e.preventDefault();
        try {
            
            const response = await axios.post("/login",
            
                JSON.stringify({ email  ,password }),
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            ).then(d=>{
                
                console.log(JSON.stringify(d.data));
                localStorage.setItem("token",JSON.stringify(d.data.token));
                localStorage.setItem("user",JSON.stringify(d.data.user.role));
                setAuth({role:d.data.user.role})
            });
            
            setPassword('');
            setEmail('');
            setSuccess(true);
            
             
        } catch (err) {
            console.log(err)
            setErrMsg('Login Failed')
        
        }
    }
        return (
            <>
            
            {success && (
                <Navigate to="/genre" replace={true} />
            )
            }
            <div className='formContainer'>
                
                
                <form onSubmit={handleLogin}>
                <h1>Login Page</h1>
                <p className={errMsg ? "errmsg" : "nodisplay"}>{errMsg}</p>
                    <input 
                        type="email"
                        className='form-control' 
                        placeholder='email'
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}} />
                    <input 
                        type="password" 
                        className='form-control'
                        placeholder='password'
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}} />
                    <button type="submit" className='btn btn-success form-control'>Login</button>
                    <p>
                        Already a member? <Link to="/signup" >Signup</Link>
                    </p>
                </form>
            </div>
            </>
        );
            
}
 
export default Login;
