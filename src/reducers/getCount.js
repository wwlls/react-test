import { GET_COUNT } from '../actions';

export const getCountData = (state = {}, action) => {
	switch (action.type) {
	    case "test.GET_COUNT":
	      	return  action.data
	    default:
	      	return state;
	}
}

export default getCountData;