import axios from 'axios';
import AccessDenied from './components/AccessDenied';
import {Navigate} from 'react-router-dom'

let instance = axios.create({
    baseURL:"http://localhost:3100"
});


instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    config.headers.Authorization =  token ? `Bearer ${token}` : '';
    console.log("headers" , config.headers);
    return config;
  });

  instance.interceptors.response.use(response => {
    return response;
 }, error => {
   if (error.response.status === 401) {
       console.log('err 401');
        return <Navigate to="/AccessDenied" replace/>
   }
   return error;
 });


  export default instance;