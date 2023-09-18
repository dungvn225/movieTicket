import carouselReducer from './carouselReducer';
import { movieManagementReducer } from './movieManagementReducer';
import { cinemaManagementReducer } from './cinemaManagementReducer';
import { userManagementReducer } from './userManagementReducer';
import { ticketManagementReducer } from './ticketManagementReducer';
import { loadingReducer } from './loadingReducer';
import {combineReducers} from 'redux';
const rootReducer=combineReducers({
 carouselReducer,
 movieManagementReducer,
 cinemaManagementReducer,
 userManagementReducer,
 ticketManagementReducer,
 loadingReducer

})

export {
    rootReducer
}