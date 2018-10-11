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

// //检查新老用户
// export const checkMobile = (url, parmas, callFuc) => async(dispatch, getState) => {
// 	try {
// 		await Utils.postRequest(url, parmas, callFuc);
// 	    dispatch({
// 	      	// 调用dispatch触发对应的reducer，如果不需要把数据存入store，则可以不调用dispatch
// 	      	type: "test.CHECK_MOBILE",
// 	    });
//     } catch (error) {
//         message.error("网络错误，请重试");
//     }
// }

//检查新老用户
const saveReducer = (data) => ({
    type: 'test.CHECK_MOBILE',
    data
})

export const checkMobile = (parmas) => async(dispatch, getState) => {
	try {
		let callFuc = function(res) {
			dispatch(
				saveReducer(res)
			)
		}
		await Utils.postRequest(`login/checkMobile`, parmas, callFuc);
    } catch (error) {
        message.error("网络错误，请重试");
    }
}