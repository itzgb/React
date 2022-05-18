import { TextField } from "@material-ui/core";
import RatingBox from "./RatingBox";
import TextFieldBox from "../TextFieldBox";
import ReviewComments from "./ReviewComments";
import ReviewCmtBox from "./ReviewCmtBox";
import {Formik , Form} from 'formik';
const CustomerReviewWrapper= () =>{
    return(
        <div className="container">
        <Formik>
            <Form>
                <div className="row">
                    <RatingBox />
                </div>
                <div className="row">
                    <ReviewCmtBox />
                </div>
                <div className="row">
                    <ReviewComments/>
                </div>
                
            </Form>
        </Formik>    
        </div>

    )
}
export default CustomerReviewWrapper;