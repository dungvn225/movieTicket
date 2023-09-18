import { GET_CAROUSEL_API } from "../types/carouselTypes"

const initialState = {
    arrImage:[
       
    ]
}

export default (state = initialState,action ) => {
 
  switch (action.type) {
   case GET_CAROUSEL_API:
   state.arrImage=action.data;
    return {...state}
  default:
    return {...state}
  }
}
