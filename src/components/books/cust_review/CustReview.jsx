import { Grid } from "@material-ui/core";
import axios from "../../../axios";
import { Form, Formik } from "formik";
import {  useParams } from "react-router-dom";
import { toast , ToastContainer } from "react-toastify";
import * as Yup from 'yup';
import ButtonWrapper from "../../common/FormUI/ButtonWrapper";
import RatingBox from "../../common/FormUI/CustomerReview/RatingBox";
import ReviewComments from "../../common/FormUI/CustomerReview/ReviewComments";
import TextFieldBox from "../../common/FormUI/TextFieldBox";
import { useState, useEffect } from "react";

const INITITAL_FORM_STATE= {
    rating:1,
    comment:""
}
const FORM_VALIDATION = Yup.object().shape({
    rating: Yup.number().required("Required"),
    comment : Yup.string("Please Provide a text").required("Required")
})


const CustReview = ({setStat,stat}) => {
const params = useParams();
const [FormValues,setFormValues] = useState();

    return(
        <Grid container>
            <Formik
                initialValues={{
                    ...INITITAL_FORM_STATE
                }}
                validationSchema={FORM_VALIDATION}
                onSubmit={async(values) => {
                    setFormValues(values);
                    
                    console.log('from review form main',values);
                    let data ={
                        ...values,
                        id:params.id,
                    }
                    console.log(data);
                    try {
                        const response = await axios.post( "/book/addreview",
                            JSON.stringify(data),
                            {
                                headers: { 'Content-Type': 'application/json' }
                            }
                        );
                        
                        console.log(JSON.stringify(response.data));
                        toast.success('Review Added Successfully');
                        setStat(!stat);
                    } catch (err) {
                        if (!err.response ) {
                            toast.info('No Server Response',{
                                position: toast.POSITION.TOP_CENTER
                              });
                        } else {
                            toast.error('Comment added failed')
                        }
                    }
                }}
                >
                <Form>
                    <Grid className="w-100" >
                        <Grid item xs={12}>
                            <RatingBox 
                            name="rating"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextFieldBox 
                                name="comment"
                                label="comment"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <ButtonWrapper 
                                >
                                Submit 
                            </ButtonWrapper>
                        </Grid>
                        
                    </Grid>
                </Form>
            </Formik>
            <ToastContainer />
        </Grid>
    )
}
export default CustReview;