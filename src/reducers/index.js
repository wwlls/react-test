import { combineReducers } from 'redux';
import imgReducer from './reducer-img';
import counter from './counter';
import checkMobile from './checkMobile';
import getVerifyCode from './getVerifyCode';
import getInfo from './getInfo';
import getCount from './getCount';
import getNoticeMessageList from './getNoticeMessageList';
import getNoticeMessage from './getNoticeMessage';

const rootReducer = combineReducers({
  imgReducer,
  counter,
  checkMobile,
  getVerifyCode,
  getInfo,
  getCount,
  getNoticeMessageList,
  getNoticeMessage,
});

export default rootReducer;
