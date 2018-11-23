import { GET_PRODUCTLIST } from '../actions';
let initstate = {
	products: []
}

export const getCountData = (state = initstate, action) => {
	switch (action.type) {
	    case "test.GET_PRODUCTLIST":
	      	return  action.data
	    default:
	      	return state;
	}
}

export default getCountData;