import * as types from '../types/movieManagementTypes'
const initState={
    arrMovies:[

    ],
    arrMoviesLimit:[ ],

   arrMoviesDefault: [

   ],

   isShowing:true,
   isComingSoon:true
  
}

export const movieManagementReducer=(state=initState,action)=>{
    switch(action.type){
        case types.GET_MOVIES_API:
            state.arrMovies=action.data;
            state.arrMoviesDefault=state.arrMovies;
            return {...state}
      
       case types.SET_MOVIE_SHOWING:
           state.isShowing=!state.isShowing;
           state.arrMovies=state.arrMoviesDefault.filter(item=>item.dangChieu==state.isShowing);
           
            return {...state}
        case types.SET_MOVIE_COMINGSOON:
           state.isComingSoon=!state.isComingSoon
           state.arrMovies=state.arrMoviesDefault.filter(item=>item.sapChieu==state.isComingSoon);
           return {...state}
        case types.GET_MOVIES_LIMIT_API:
            state.arrMoviesLimit=action.data;
            return {...state};
        default:
            return {...state};
    }
}


