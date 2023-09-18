
import { TOKEN, USER_LOGIN } from "../../utils/settings/config"
import { GET_USERS, LOGIN, USER_INFO , SIGNUP} from "../types/userManagementTypes"

let user={}

if(localStorage.getItem(USER_LOGIN)){
    user=JSON.parse(localStorage.getItem(USER_LOGIN)) 
}

const initState={
    userLogin:user,
    userInfo:{},
    getUsers:[],
    msg:'',
    isLogin:JSON.parse(localStorage.getItem(USER_LOGIN))?true:false
}

export const userManagementReducer=(state=initState,action)=>{
    switch(action.type){
        case SIGNUP:
            state.msg=action.msg;
            return {...state}
        case LOGIN:
           
           localStorage.setItem(USER_LOGIN,JSON.stringify(action.data));
           localStorage.setItem(TOKEN,JSON.stringify(action.data.accessToken));
           state.isLogin=true
           return {...state,userLogin:action.data}
        case USER_INFO:
            state.userInfo=action.data;
            return {...state}
        case GET_USERS:
           state.getUsers=action.data
          
            return {...state}
        default:
            return {...state}
    }
}
