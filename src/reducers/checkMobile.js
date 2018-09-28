import { CHECK_MOBILE } from '../actions';

// let initState = {
// 	fetchvalue: '',
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

export const mobile = (state = {}, action) => {
	//console.log(state)
	switch (action.type) {
	    case "CHECK_MOBILE":
	      	return state;
	    default:
	      	return state;
	}
}

export default mobile;