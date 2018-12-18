import { ACCOUNT_GETINFO } from '../actions';

// let initState = {
// 	checkMobileData: {},
// }

/** 对应的reducer处理函数，改变store中的值 **/
//const actDefault = state => state;

// const checkMobileFetch = (state, action) => {
// 	console.log(111)
//   	const { payload } = action;
//   	return Object.assign({}, state, {
//     	fetchvalue: payload
//   	});
// };

export const acountInfoData = (state = {}, action) => {
	switch (action.type) {
	    case "test.ACCOUNT_GETINFO":
	      	return  action.data
	    default:
	      	return state;
	}
}

export default acountInfoData;