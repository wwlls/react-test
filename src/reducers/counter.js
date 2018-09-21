import { ADD_NUM, REMOVE_NUM } from '../actions/index';

export const counter = (state = 0 , action) => {
	switch(action.type) {
		case 'ADD_NUM':
			return state + 1
		case 'REMOVE_NUM':
			return state - 1
		default:
			return state
	}
}

export default counter;