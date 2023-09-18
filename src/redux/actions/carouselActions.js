import { getCarouselApi } from "../../services/moviesManagementrService"
import { STATUS } from "../../utils/settings/config";
import { GET_CAROUSEL_API } from "../types/carouselTypes";
export const GetCarouselApiAction = ()=>{
   
   try {
       return async dispatch=>{
            const result= await getCarouselApi();
           
            dispatch({
               type:GET_CAROUSEL_API,
               data:result.data.content
            })
       }
   } catch (error) {
     return error
   }
   
}