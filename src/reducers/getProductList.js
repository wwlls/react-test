import { GET_PRODUCTLIST } from '../actions';
let initstate = {
	products:[[],[],[]],
}

export const getCountData = (state = initstate, action) => {
	switch (action.type) {
	    case "test.GET_PRODUCTLIST":
	      	return {
	      		products: [action.data1,action.data2,action.data3]
	      	}  
	    default:
	      	return state;
	}
}

export default getCountData;