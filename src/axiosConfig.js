import { TOKEN } from "./utils/settings/config";
import axios from "axios";
 let token=localStorage.getItem(TOKEN);
 token=token?.slice(1,token.length-1)

const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,  
    headers:{'Authorization': `Bearer ${token}`}
  });



// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
  
    return response;      
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });



  export default instance











//=>tạo .env trong file chạy