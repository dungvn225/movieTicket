
import * as movieManagementServices from '../../services/moviesManagementrService';
import { GET_MOVIES_API, GET_MOVIES_LIMIT_API } from '../types/movieManagementTypes';
export const getMovieAction=()=>{
     return async dispatch=>{
          try{
              const result=await movieManagementServices.getMovies();
           
              dispatch({
                type: GET_MOVIES_API,
                data:result.data.content
              })
          }catch(error){
          
          }
     }
}


export const getMovieLimitAction=(page)=>{
     return async dispatch=>{
          try{
              const result=await movieManagementServices.getMoviesLimit(page);
           
              dispatch({
                type: GET_MOVIES_LIMIT_API,
                data:result.data.content
              })
          }catch(error){
            return error
          }
     }
}