import { CHECK_MOBILE } from '../actions';

let initState = {
	fetchvalue: '',
}

/** 对应的reducer处理函数，改变store中的值 **/
const actDefault = state => state;

const checkMobileFetch = (state, action) => {
  	const { payload } = action;
  	return Object.assign({}, state, {
    	fetchvalue: payload
  	});
};

export const checkMobile = (state = 0 , action) => {
	switch (action.type) {
	    case "CHECK_MOBILE":
	      	return checkMobileFetch(state, action);
	    default:
	      	return actDefault(state, action);
	}
}

export default checkMobile;