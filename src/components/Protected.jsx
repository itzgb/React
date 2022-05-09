import {Navigate , Outlet} from 'react-router-dom' 
const ProtectedRoute = ({ token }) => {
    console.log(token());
    let val;
    val = token();
    console.log(val ,!val);
    if (!val) {
      return <Navigate to="/login" replace />;
    }
  
    return <Outlet />;
  };

  export default ProtectedRoute;