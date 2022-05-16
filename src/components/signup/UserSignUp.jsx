import * as Yup from 'yup';
import SignUpFormLayout from './SignUpLayout';
import {Link} from 'react-router-dom'
const INITITAL_FORM_STATE = {
    username:'',
    email:'',
    password:'',
};

const FORM_VALIDATION = Yup.object().shape({
    username: Yup.string()
    .min(8,"Please Enter atleast 8 characters")
    .required("Required"),
    email:Yup.string().email("Please Enter a Valid Email").required("Required"),
    password: Yup.string()
    .min(8,"Please Enter atleast 8 characters")
    .required("Required"),
    
})

const url = "";
const UserSignUp = () => {
    
    return(
        <div className='container w-50'>

        <SignUpFormLayout
        key="user"
        INITITAL_FORM_STATE = {INITITAL_FORM_STATE}
        FORM_VALIDATION = {FORM_VALIDATION}
        url = {url}
        
        >
            <div >
                Already a member ? <Link to="/login" >Login</Link> 
                <p>
                    Not a Buyer ?<Link to="/seller/signupd" > Seller Signup</Link>
                </p>
                
            </div>
        </SignUpFormLayout>
        </div>
    )
}
export default UserSignUp;