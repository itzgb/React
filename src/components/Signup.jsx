import {  useEffect, useState } from 'react';
import {Link ,Navigate} from 'react-router-dom'
import '../App.css'
import axios from '../axios';
import IntlTelInput from 'react-intl-tel-input';
  import 'react-intl-tel-input/dist/main.css';
  


const text_regex = /[A-Za-z]{8,24}/;
//const email_regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
//const mob_regex = /[0-9]{10}/;
const Signup = ({user}) =>{

    const [currentUser,setCurrentUser] = useState('')
    const [username , setUsername] = useState('');
    const [validUserName , setValidUserName] = useState(false);

    const [email,setEmail] = useState('');
    const [validEmail , setValidEmail] = useState(false);
    
    const [mobile,setMobile] = useState();
    const [validMobile , setValidMobile] = useState(false);

    const [company,setCompany] = useState('');
    const [validCompany , setValidCompany] = useState(false);
    
    const [password,setPassword] = useState('');
    const [validPassword , setValidPassword] = useState(false);

    const [errMsg , setErrMsg ] = useState('');
    const [success,setSuccess] = useState(false);

    useEffect(()=>{
        setCurrentUser(user)
    },[])
    useEffect(()=>{
        setCurrentUser(user)
    },[currentUser])    

    useEffect(()=>{
        const result = text_regex.test(username);
        console.log(result);
        console.log(username);
        setValidUserName(result);
    },[username])

    

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(mobile);
        const checkUser = text_regex.test(username);
        const checkPass = text_regex.test(password);
        if (!checkUser || !checkPass) {
            setErrMsg("Check all fields entered correctly");
            return;
        }
        let data;
        let url;
        if(currentUser === "seller"){
            url = "/seller/signup";
            data = {username , email , mobile , password , company};
        }
        else{
            url="/signup";
            data = {username , email , mobile , password }
        }
        try {
            const response = await axios.post( url,
                JSON.stringify(data),
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            );
            
            console.log(JSON.stringify(response.data));
            
            setUsername('');
            setPassword('');
            setEmail('');
            setSuccess(true);
            
        } catch (err) {
            if (!err.response) {
                setErrMsg('No Server Response');
            } else if (err.response.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
        }
    }
    return(
        <>
        {success && (
            <Navigate to="/login" replace={true} />
        )
        }
        <div className='formContainer' key={user}>
            <p  className={errMsg ? "errmsg" : "nodisplay"}>{errMsg}</p>
            <form onSubmit={handleSubmit}>
                <h1>Signup</h1>
                <input 
                    className="form-control"
                    type="text" 
                    placeholder='username'
                    value={username}
                    onChange={(e)=>{setUsername(e.target.value)}}/>
                <p className={ username && !validUserName ? "instructions" : "offscreen"}>
                            Please enter a valid username.
                        </p>
                <br />
                <input 
                    type="email" 
                    className="form-control"
                    placeholder='email'
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}} />
                <br />
                <IntlTelInput  
                    value={mobile}
                    inputClassName="form-control"
                    onPhoneNumberChange={(e,v,c,f)=>{console.log(f);setValidMobile(e);setMobile(f)}}
                    
                    />
                <br />
                {(currentUser ==="seller" ) ? 
                    <input 
                        className="form-control"
                        placeHolder="company"
                        value={company}
                        onChange={(e)=>{setCompany(e.target.value)}} /> 
                    : 
                    <div></div> 
                }
                <input 
                    type="password" 
                    className="form-control"
                    placeholder='password'
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}} />
                <br />
                <button type="submit" className="form-control btn btn-success">Signup</button>
                <p>
                    Already a member ? <Link to="/login" >Login</Link> 
                    { ( <p>Not a {currentUser} ? {currentUser === "user" ? 
                        <>
                        <button 
                            className="btn btn-info" 
                            onClick={(e)=>{e.preventDefault(); } }
                            >
                            Seller Signup
                        </button>
                        <Link to="/seller/signup" >seller</Link> 
                        </>
                        :
                        <Link to="/signup" >User Signup</Link>
                        }</p>)}
                </p>
            </form>
            
        </div>
        </>
    )
}
 
export default Signup;
