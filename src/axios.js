import axios from 'axios';


let instance = axios.create({
    baseURL:"http://localhost:3100"
});


instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    config.headers.Authorization =  token ? `Bearer ${token}` : '';
    console.log("headers" , config.headers);
    return config;
  });


  export default instance;