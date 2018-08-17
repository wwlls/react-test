import axios from 'axios';

export const SET_IMG = 'SET_IMG';


export function setImg(src) {
  return {
    type: SET_IMG,
    payload: src
  };
}
