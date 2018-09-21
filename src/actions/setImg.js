import axios from 'axios';
import * as test from './actionType';

export function setImg(src) {
  return {
    type: test.SET_IMG,
    payload: src
  };
}