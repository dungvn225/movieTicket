import axios from "axios";
import { DOMAIN, TOKEN } from "../utils/settings/config";

export const post=(url,data)=>{
    let token=localStorage.getItem(TOKEN);
    token=token.slice(1,token.length-1);
  
  return axios({
     url:`${DOMAIN}${url}`,
     method:'POST',
     data:data,
     headers: {"Authorization" : `Bearer ${token}`} 
   })
}

