import { DISPLAY_LOADING, HIDE_LOADING } from "../types/loadingTypes"

const initState ={
    isLoading:false,
    isLanguage:false
}

export const loadingReducer=(state=initState,action)=>{
    switch(action.type){
        case DISPLAY_LOADING:
            state.isLoading=true
          
            
            return {...state}
        case HIDE_LOADING:
            state.isLoading=false;
         
            return {...state}
        case 'isLanguage':
            state.isLanguage= !state.isLanguage;
        return {...state}
        default :
        return {...state}
    }
}