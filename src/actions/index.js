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
			dispatch(
				getInfo(res)
			)
		}
		await Utils.postRequest(`customer/getInfo`, parmas, callFuc);
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
			dispatch(
				countData(JSON.parse(res.body).countData)
			)
		}
		await Utils.postRequest(`asset/getCountTotal`, parmas, callFuc);
	} catch (error) {
		message.error("网络错误，请重试");
	}
}

//获取产品列表
const productListData = (data) => ({
	type: 'test.GET_PRODUCTLIST',
	data
})
export const getProductList = (parmas) => async(dispatch, getstate) => {
	try {
		let callFuc = function(res) {
			dispatch(
				productListData(res)
			)
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
			dispatch(
				noticeMessageList(res)
			)
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
			dispatch(
				noticeMessage(res)
			)
		}
		await Utils.postRequest(`home/getNoticeMessage`, parmas, callFuc);
	} catch (error) {
		message.error("网络错误，请重试");
	}
}