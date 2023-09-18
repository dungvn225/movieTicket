
import { getCinemaSystemApi, getMovieDetailApi } from "../../services/cinemaManagementServices";
import { SET_CINEMA, SET_MOVIE_DETAIL } from "../types/cinemaManagementTypes";

export const getCinemaSystemAction=()=>{
     return async dispatch=>{
        try{
             const result=await getCinemaSystemApi();
            
             dispatch({
                type:SET_CINEMA,
                data: result.data.content
             })
        }catch(error){
         
        }
     }
}

export const getMovieDetailAction=(movieId)=>{
   return async dispatch=>{
        try {
            const result= await getMovieDetailApi(movieId)
            dispatch({
               type: SET_MOVIE_DETAIL,
               data:result.data.content
            })
        } catch (error) {
         return error
        }
   }
}