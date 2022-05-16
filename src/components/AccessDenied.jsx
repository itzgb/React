import { useNavigate } from "react-router-dom";
const AccessDenied = () =>{
    let navigate = useNavigate();
    return(
        <>
        <div>Access Denied</div>
        {navigate(-1)}
        </>
    )
}
export default AccessDenied;