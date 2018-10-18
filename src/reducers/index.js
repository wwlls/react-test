import { combineReducers } from 'redux';
import imgReducer from './reducer-img';
import counter from './counter';
import checkMobile from './checkMobile';
import getCount from './getCount';
import getNoticeMessage from './getNoticeMessageList';

const rootReducer = combineReducers({
  imgReducer,
  counter,
  checkMobile,
  getCount,
  getNoticeMessage,
});

export default rootReducer;
