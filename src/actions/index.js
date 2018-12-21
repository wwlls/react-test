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

//检查新老用户
const getReducer = (data) => ({
    type: 'test.CHECK_MOBILE',
    data
})

export const checkMobile = (parmas) => async(dispatch, getState) => {
	try {
		let callFuc = function(res) {
			dispatch(
				getReducer(res)
			)
		}
		await Utils.postRequest(`login/checkMobile`, parmas, callFuc);
    } catch (error) {
        message.error("网络错误，请重试");
    }
}
//获取验证码
const getCode = (data) => ({
	type: 'test.VERIFY_CODE',
	data
})
export const getVerifyCode = (parmas) => async(dispatch, getState) => {
	try {
		let callFuc = function(res) {
			dispatch(
				getCode(res)
			)
		}
		await Utils.postRequest(`verifyCode/get`, parmas, callFuc);
    } catch (error) {
        message.error("网络错误，请重试");
    }
}

//获取当前登录用户信息
const getInfo = (data) => ({
	type: 'test.GET_INFO',
	data
})
export const getInfoData = (parmas) => async(dispatch, getState) => {
	try {
		let callFuc = function(res) {
			if(res.rtn_code === 0) {
				dispatch(
					getInfo(res)
				)
			} else {
				Message.error(res.rtn_msg);
			}
		}
		await Utils.postRequest(`customer/getInfo`, parmas, callFuc);
    } catch (error) {
        message.error("网络错误，请重试");
    }
}

//获取当前用户信息
const accountGetInfo = (data) => ({
	type: 'test.ACCOUNT_GETINFO',
	data
})
export const accountGetInfoData = (parmas) => async(dispatch, getState) => {
	try {
		let callFuc = function(res) {
			if(res.rtn_code === 0) {
				dispatch(
					accountGetInfo(res)
				)
			} else {
				Message.error(res.rtn_msg);
			}
		}
		await Utils.postRequest(`account/getInfo`, parmas, callFuc);
    } catch (error) {
        message.error("网络错误，请重试");
    }
}

//获取平台数据
const countData = (data) => ({
	type: 'test.GET_COUNT',
	data
})
export const getCount = (parmas) => async(dispatch, getstate) => {
	try {
		let callFuc = function(res) {
			if(res.rtn_code === 0) {
				dispatch(
					countData(JSON.parse(res.body).countData)
				)
			} else {
				Message.error(res.rtn_msg);
			}
		}
		await Utils.postRequest(`asset/getCountTotal`, parmas, callFuc);
	} catch (error) {
		message.error("网络错误，请重试");
	}
}

//获取产品列表
const productListData = (data1,data2,data3) => ({
	type: 'test.GET_PRODUCTLIST',
	data1,
	data2,
	data3
})
export const getProductList = (parmas) => async(dispatch, getstate) => {
	try {
		let callFuc = function(res) {
			if(res.rtn_code === 0) {
				let products = JSON.parse(res.body).products;
				//爆款专区
				let productsOne = [];
				//短期出借
				let productsTwo = [];
				//长期出借
				let productsThree = [];
				for (var i = 0; i < 1; i++) {
		 			productsOne.push(products[4],products[5]);
		 			productsTwo.push(products[0],products[1]);
		 			productsThree.push(products[2],products[3]);
		 		};
				dispatch(
					productListData(productsOne,productsTwo,productsThree)
				)
				
			} else {
				Message.error(res.rtn_msg);
			}
		}
		await Utils.postRequest(`product/getRegularListForOfficialSite`, parmas, callFuc);
	} catch (error) {
		message.error("网络错误，请重试");
	}
}

//获取公司动态
const noticeMessageList = (data) => ({
	type: 'test.GET_NOTICEMESSAGELIST',
	data
})

export const getNoticeMessageList = (parmas) => async(dispatch, getstate) => {
	try {
		let callFuc = function(res) {
			if(res.rtn_code === 0) {
				dispatch(
					noticeMessageList(JSON.parse(res.body))
				)
			} else {
				Message.error(res.rtn_msg);
			}
		}
		await Utils.postRequest(`home/getNoticeMessageList`, parmas, callFuc);
	} catch (error) {
		message.error("网络错误，请重试");
	}
}

//获取公司动态详情
const noticeMessage = (data) => ({
	type: 'test.GET_NOTICEMESSAGE',
	data
})

export const getNoticeMessage = (parmas) => async(dispatch, getstate) => {
	try {
		let callFuc = function(res) {
			if(res.rtn_code === 0) {
				dispatch(
					noticeMessage(JSON.parse(res.body))
				)
			} else {
				Message.error(res.rtn_msg);
			}			
		}
		await Utils.postRequest(`home/getNoticeMessage`, parmas, callFuc);
	} catch (error) {
		message.error("网络错误，请重试");
	}
}