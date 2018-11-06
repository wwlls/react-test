import { combineReducers } from 'redux';
import imgReducer from './reducer-img';
import counter from './counter';
import checkMobile from './checkMobile';
import getVerifyCode from './getVerifyCode'
import getCount from './getCount';
import getNoticeMessageList from './getNoticeMessageList';
import getNoticeMessage from './getNoticeMessage';

const rootReducer = combineReducers({
  imgReducer,
  counter,
  checkMobile,
  getVerifyCode,
  getCount,
  getNoticeMessageList,
  getNoticeMessage,
});

export default rootReducer;
