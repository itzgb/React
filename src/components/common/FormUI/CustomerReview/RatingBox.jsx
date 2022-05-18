import {Rating} from '@material-ui/lab'
import { useField } from 'formik';
import { useEffect ,useState} from 'react';
const RatingBox = ({name}) =>{
    const [field, meta , helpers] = useField(name);
    
    const { value } = meta;
    const {setValue} = helpers;

    useEffect(()=>{

    },[])
    return(
        <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            />
    )
}
export default RatingBox;