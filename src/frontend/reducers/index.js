import { combineReducers } from 'redux';
import flightsReducer from './flightsReducer'
import infoReducer from './infoReducer';

export const rootReducer = combineReducers({
    flightsReducer,
    infoReducer,
})
