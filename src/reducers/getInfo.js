import { GET_INFO } from '../actions';

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

export const InfoData = (state = {}, action) => {
	switch (action.type) {
	    case "test.GET_INFO":
	      	return  action.data
	    default:
	      	return state;
	}
}

export default InfoData;