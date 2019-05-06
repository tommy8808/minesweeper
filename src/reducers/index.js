import {combineReducers} from 'redux';
import play from './play';
import map from './map';
const rootReducer = combineReducers( {
    play,
   // map,
});

export default rootReducer;