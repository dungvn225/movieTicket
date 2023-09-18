import { SET_CINEMA, SET_MOVIE_DETAIL } from "../types/cinemaManagementTypes"

const initState={
    arrCinemaSystem:[

    ],
    movieDetail:{

    }
}

export const cinemaManagementReducer=(state=initState,action)=>{
    switch(action.type){
        case SET_CINEMA:
           state.arrCinemaSystem=action.data;
           return {...state}
        case SET_MOVIE_DETAIL:
            state.movieDetail=action.data;
            return {...state}
        default :
        return {...state}
    }
}