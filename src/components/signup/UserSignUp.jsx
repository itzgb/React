import * as Yup from 'yup';
import SignUpFormLayout from './SignUpLayout';
import {Link} from 'react-router-dom'
import IntlTelInput from 'react-intl-tel-input';
import MobileInput from '../common/FormUI/MobileInput';
import { Grid } from '@material-ui/core';
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

const url = "/signup";
const UserSignUp = () => {
    
    return(
        <div className='container w-50'>

        <SignUpFormLayout
        key="user"
        INITITAL_FORM_STATE = {INITITAL_FORM_STATE}
        FORM_VALIDATION = {FORM_VALIDATION}
        url = {url}
        
        >
            <MobileInput/>   
        </SignUpFormLayout>
        <div className='ml-5'>
            <Grid >
                Already a member ? <Link to="/login" className="btn btn-primary">Login</Link> 
            </Grid>
            <Grid>
                <p>
                    Not a Buyer ?<Link to="/seller/signup" className="btn btn-info" > Seller Signup</Link>
                </p>
            </Grid>
        </div>    
        </div>
    )
}
export default UserSignUp;