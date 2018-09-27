import { combineReducers } from 'redux';
import imgReducer from './reducer-img';
import counter from './counter';
import checkMobile from './checkMobile';

const rootReducer = combineReducers({
  imgReducer,
  counter,
  checkMobile,
});

export default rootReducer;
