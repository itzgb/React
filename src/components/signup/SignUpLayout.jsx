import * as Yup from 'yup';
import TextFieldBox from '../common/FormUI/TextFieldBox';
import {Grid } from '@material-ui/core'
import { Formik , Form} from 'formik';
import ButtonWrapper from '../common/FormUI/ButtonWrapper';
import { useEffect , useState} from 'react';
import axios from '../../axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SignUpFormLayout = ({INITITAL_FORM_STATE , FORM_VALIDATION , url , children}) =>{
    const [arrData , setArrData] = useState([]);
    
    useEffect( () => {
        let arr = [];
        for(var i in INITITAL_FORM_STATE){
            arr.push(i);
        }
        console.log(arr);
        setArrData(arr)
    },[])
    
    return(
        <Grid container>
            <Formik
                initialValues={{
                    ...INITITAL_FORM_STATE
                }}
                validationSchema={FORM_VALIDATION}
                onSubmit={async(values) => {
                    console.log('from sign up form main',values);

                    try {
                        const response = await axios.post( url,
                            JSON.stringify(values),
                            {
                                headers: { 'Content-Type': 'application/json' }
                            }
                        );
                        
                        console.log(JSON.stringify(response.data));
                        
                        
                    } catch (err) {
                        if (!err.response) {
                            toast.info('No Server Response',{
                                position: toast.POSITION.TOP_CENTER
                              });
                        } else if (err.response.status === 409) {
                            toast.info('Username Taken');
                        } else {
                            toast.danger('Registration Failed')
                        }
                    }
                }}
                >
                <Form>
                    <Grid container >
                        {arrData.map((val , index)=>

                            <Grid item xs={12} className='mb-2'>
                                <TextFieldBox 
                                name={val}
                                label={val}
                                />
                            </Grid>
                        )}
                        <Grid item xs={12}>
                            {children}
                        </Grid>
                        <Grid item xs={12}>
                            <ButtonWrapper>
                                Sign Up
                            </ButtonWrapper>
                        </Grid>
                        
                    </Grid>
                </Form>
            </Formik>
            <ToastContainer />
        </Grid>
    )
}
export default SignUpFormLayout;