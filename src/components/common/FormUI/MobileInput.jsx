import { useFormikContext ,useField} from "formik";
import { useEffect , useState } from "react";
import IntlTelInput from 'react-intl-tel-input';
const MobileInput = () =>{
    const [validMobile , setValidMobile] = useState()
    const {values , } = useFormikContext()
    const [field, meta, helpers] = useField('mobile');
    const {value} = meta;
    const {setValue} = helpers;
    return(
        <div className="w-100 mb-2">
            <IntlTelInput 
                        id='mobile' 
                        value={value}
                        
                        inputClassName="form-control w-100"
                        onPhoneNumberChange={(isValid,value,countryData ,fullNumber)=>{
                            setValue(fullNumber)
                            setValidMobile(!isValid);
                        }}
                        />
                    {validMobile ? <p className='formerrmsg'>Please enter a valid mobile number</p> : null }    
                
        </div>
    ) 
}
export default MobileInput;