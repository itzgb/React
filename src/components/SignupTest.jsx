import {  useEffect, useState } from 'react';
import {Link ,Navigate} from 'react-router-dom'
import '../App.css'
import axios from '../axios';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import {useFormik} from 'formik'  
import * as Yup from 'yup';

const SignupTest = ({user}) =>{

    const [currentUser,setCurrentUser] = useState('')
    const [validMobile , setValidMobile] = useState(false)
    const [errMsg , setErrMsg ] = useState('');
    const [success,setSuccess] = useState(false);

    const formik = useFormik({
        initialValues:{
            username:"",
            email:"",
            mobile:"",
            company:"",
            password:""
        },
        validationSchema: Yup.object({
            username: Yup.string()
            .min(8,"Username must be atleast 8 characters")
            .required("Required"),
            password: Yup.string()
            .min(8,"Password must be atleast 8 characters")
            .required("Required"),
            email: Yup.string().email("Invalid Email").required("Required"),
            company: Yup.string()
            .min(8,"Company Name must be atleast 8 characters")
            .required("Required"),
        }),
        onSubmit: async (values) =>{
            console.log(values)
            let url;
            if(currentUser === "seller"){
                url = "/seller/signup";                
            }
            else{
                url="/signup";
            }
            try {
                const response = await axios.post( url,
                    JSON.stringify(values),
                    {
                        headers: { 'Content-Type': 'application/json' }
                    }
                );
                
                console.log(JSON.stringify(response.data));
                
                
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
    });
    
    console.log(formik.errors);
    useEffect(()=>{
        setCurrentUser(user)
    },[])
    useEffect(()=>{
        setCurrentUser(user)
    },[currentUser])    

    
    

  
    return(
        <>
        {success && (
            <Navigate to="/login" replace={true} />
        )
        }
        <div className='formContainer' key={user}>
            <p  className={errMsg ? "errmsg" : "nodisplay"}>{errMsg}</p>
            <form onSubmit={formik.handleSubmit}>
                <h1>Signup</h1>
                <div className='input-container'>
                    <input 
                        id='username'
                        className="form-control"
                        type="text" 
                        placeholder='username'
                        value={formik.values.username}
                        onChange={formik.handleChange}/>
                    {formik.errors.username ? <p className='formerrmsg'>{formik.errors.username}</p> : null }
                </div>
                <div className='input-container'>
                    <input 
                        id='email'
                        type="email" 
                        className="form-control"
                        placeholder='email'
                        value={formik.values.email}
                        onChange={formik.handleChange} />
                    {formik.errors.email ? <p className='formerrmsg'>{formik.errors.email}</p> : null }
                </div>
                <div className='input-container'>
                    <IntlTelInput 
                        id='mobile' 
                        value={formik.values.mobile}
                        inputClassName="form-control"
                        onPhoneNumberChange={(isValid,value,countryData ,fullNumber)=>{
                            formik.setFieldValue('mobile',fullNumber)
                            setValidMobile(!isValid);
                        }}
                        />
                    {validMobile ? <p className='formerrmsg'>Please enter a valid mobile number</p> : null }    
                </div>
                {(currentUser ==="seller" ) ? 
                    <div className='input-container'>
                        <input 
                            id='company'
                            className="form-control"
                            placeHolder="company"
                            value={formik.values.company}
                            onChange={formik.handleChange} /> 
                        {formik.errors.company ? <p className='formerrmsg'>{formik.errors.company}</p> : null }
                    </div>
                    : 
                    null 
                }
                <div className='input-container'>
                    <input 
                        id='password'
                        type="password" 
                        className="form-control"
                        placeholder='password'
                        value={formik.values.password}
                        onChange={formik.handleChange} />
                    {formik.errors.password ? <p className='formerrmsg'>{formik.errors.password}</p> : null }
                </div>
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
 
export default SignupTest;
