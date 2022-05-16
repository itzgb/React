import * as Yup from 'yup';
import SignUpFormLayout from './SignUpLayout';
import {Link} from 'react-router-dom'
const INITITAL_FORM_STATE = {
    username:'',
    email:'',
    company:'',
    password:'',
};

const FORM_VALIDATION = Yup.object().shape({
    username: Yup.string()
    .min(8,"Please Enter atleast 8 characters")
    .required("Required"),
    email:Yup.string().email("Please Enter a Valid Email").required("Required"),
    company: Yup.string()
    .min(8,"Please Enter atleast 8 characters")
    .required("Required"),
    password: Yup.string()
    .min(8,"Please Enter atleast 8 characters")
    .required("Required"),
    
})
const SellerSignUp = () => {
    
    return(
        <div className='container w-50'>

        <SignUpFormLayout
        key="seller"
        INITITAL_FORM_STATE = {INITITAL_FORM_STATE}
        FORM_VALIDATION = {FORM_VALIDATION}
        >
            <div>
                Already a member ? <Link to="/login" >Login</Link> 
                <Link to="/signupd" >User Signup</Link>
            </div>
        </SignUpFormLayout>
        </div>
    )
}
export default SellerSignUp;