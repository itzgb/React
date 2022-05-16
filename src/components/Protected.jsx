import { useContext } from 'react';
import {Navigate , Outlet} from 'react-router-dom' 
import AuthContext from './AuthProvider';
const ProtectedRoute = ({ token , user}) => {
    const {auth} = useContext(AuthContext)
    console.log(token());
    let val;
    val = token();
    // const role = localStorage.getItem('user').replaceAll('"','');
    const role = auth.role; 
    console.log(val ,!val , role);
    return(

      !val ? 
      
      <Navigate to="/login" replace />
      : 
      user.includes(role) ?
        <Outlet />
      :
        <Navigate to="/AccessDenied" replace />
    )
  };

  export default ProtectedRoute;