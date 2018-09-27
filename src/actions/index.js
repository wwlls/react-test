import axios from 'axios';
import Utils from '../utils';
import { message } from "antd";
import * as test from './actionType';

export function setImg(src) {
  return {
    type: test.SET_IMG,
    payload: src
  };
}

export const addNum = (value) => {
	return {
		type: test.ADD_NUM,
		value
	}
}

export const removeNum = (value) => {
	return {
		type: test.REMOVE_NUM,
		value
	}
}


export const checkMobile = (url, parmas, callFuc) => async(dispatch , getstate) => {
	try {
		const res = await Utils.postRequest(url, parmas, callFuc);
	    dispatch({
	      // 调用dispatch触发对应的reducer，如果不需要把数据存入store，则可以不调用dispatch
	      type: "test.CHECK_MOBILE",
	      payload: res
	    });
	    return res; // 同时也把数据直接返回调用的地方
    } catch (error) {
        message.error("网络错误，请重试");
    }
}