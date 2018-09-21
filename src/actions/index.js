import axios from 'axios';
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