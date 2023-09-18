import { bookTicketsApi, getTicketDetailApi } from "../../services/ticketManagementServices"
import { CHANGE_TAB, GET_TICKET_DETAIL, REDIRECT_TAB, SET_SEAT, SET_TICKET, SET_TICKET_FINISH,  } from "../types/ticketManagementTypes";
import { displayLoadingAction, hideLoadingAction } from "./loadingActions";
import { userInfoAction } from "./userManagementActions";

export const getTicketDetailAction=(id)=>{
  return async dispatch=>{
       try {
        dispatch(displayLoadingAction())    
           const result=await getTicketDetailApi(id);
          
           dispatch({
            type:GET_TICKET_DETAIL,
            data:result.data.content
           })
             dispatch(hideLoadingAction())      
       } catch (error) {
        
       }
  }
}


export const seatAction=(seat)=>{
      return {
        type: SET_SEAT,
        seat
      }
}


export const bookTicketsAction=(data)=>{

   
  return async dispatch=>{
  
       try {
          dispatch(displayLoadingAction())    
         const result= await bookTicketsApi(data);  
      
       
      
         await dispatch({
          type:SET_TICKET_FINISH
         })  
      
       await dispatch(userInfoAction())
      
       await  dispatch(redirectTab());
           dispatch(hideLoadingAction())  
          
      
       } catch (error) {
        
       }
  }
}


export const changeTabAction=(key)=>{
  return {
    type: CHANGE_TAB,
    key
  }
}

export const redirectTab=()=>{
  return {
     type:REDIRECT_TAB
  }
}