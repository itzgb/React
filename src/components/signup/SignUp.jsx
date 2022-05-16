import * as Yup from 'yup';
import TextFieldBox from '../common/FormUI/TextFieldBox';
import {Grid , Box } from '@material-ui/core'
import { Formik , Form} from 'formik';
import ButtonWrapper from '../common/FormUI/ButtonWrapper';

const INITITAL_FORM_STATE = {
    username:'',
    email:'',
    password:'',
    
};

const FORM_VALIDATION = Yup.object().shape({
    username: Yup.string()
    .required("Required"),
    
    
})

const UserSignUp = () =>{
    
    return(
        <Grid container>
            <Formik
                initialValues={{
                    ...INITITAL_FORM_STATE
                }}
                validationSchema={FORM_VALIDATION}
                onSubmit={values => {
                    console.log('from main',values);
                }}
                >
                <Form>
                    <TextFieldBox 
                        
                        name="username"
                        label="username"
                        />
                    <ButtonWrapper>
                        Sign Up
                    </ButtonWrapper>
                    
                </Form>
            </Formik>
        </Grid>
    )
}
export default UserSignUp;