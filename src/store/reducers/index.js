import { combineReducers } from '@reduxjs/toolkit'
import movieReducer from './movieReducer';

export default combineReducers({
    moviesState:movieReducer
});