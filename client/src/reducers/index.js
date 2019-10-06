import {combineReducers} from 'redux';
import {gasReducer} from './gasReducer';
import {aguaReducer} from './aguaReducer';
import {energiaReducer} from './energiaReducer';


export default combineReducers({
    gas: gasReducer,
    agua: aguaReducer,
    energia: energiaReducer
});