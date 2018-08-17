import { combineReducers } from 'redux';
import imgReducer from './reducer-img';

const rootReducer = combineReducers({
  imgSrc: imgReducer
});

export default rootReducer;
