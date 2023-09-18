import { getUsersApi, userInfoApi, UserLoginApi, userSignupApi } from "../../services/userManagementServices"
import { GET_USERS, LOGIN, USER_INFO, SIGNUP } from "../types/userManagementTypes";
import { displayLoadingAction, hideLoadingAction } from "./loadingActions";

export const userLoginAction=(data)=>{
    return async dispatch=>{
        try{
             const result=await UserLoginApi(data);
            
             dispatch({
                type:LOGIN,
                data: result.data.content
             })
        }catch(error){
        
        }
     }
}


export const userInfoAction=()=>{
    return async dispatch=>{

         try {  
            dispatch(displayLoadingAction())
            const result=await userInfoApi();
           
        await    dispatch({
                type: USER_INFO,
                data:result.data.content
            })

           dispatch(hideLoadingAction())
         } catch (error) {
         
         }
    }
}


export const getUsersAction= ()=>{
     return async dispatch=>{
     try {
        const result=await getUsersApi();
      
         dispatch({
            type:GET_USERS,
            data:result.data.content
         })
     } catch (error) {
       return error
     }
     }
}

export const userSignupAction=(data)=>{
    return async dispatch=>{
        const result=await userSignupApi(data);
      
         try {
            
                  dispatch({
                    type:SIGNUP,
                    data:result.data.content,
                    msg:result.data.message
                 })
           
         } catch (error) {
          return error
         }
    }
}