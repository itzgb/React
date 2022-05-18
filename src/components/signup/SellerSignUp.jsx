import * as Yup from 'yup';
import SignUpFormLayout from './SignUpLayout';
import {Link} from 'react-router-dom'
import MobileInput from '../common/FormUI/MobileInput';
import { Grid } from '@material-ui/core';

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
const url ="/seller/signup";
const SellerSignUp = () => {
    
    return(
        <div className='container w-50'>

        <SignUpFormLayout
        key="seller"
        INITITAL_FORM_STATE = {INITITAL_FORM_STATE}
        FORM_VALIDATION = {FORM_VALIDATION}
        url={url}
        >
            <MobileInput/>   
        </SignUpFormLayout>
            <div>
                <Grid container>
                    <Grid>
                            Already a member ? <Link to="/login" className="btn btn-primary">Login</Link> 
                    </Grid>
                    
                    <Grid>
                        <p>
                            Not a Buyer ?<Link to="/signup" className="btn btn-primary">User Signup</Link>
                            </p>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
export default SellerSignUp;