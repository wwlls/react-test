import { SET_IMG } from '../actions/setImg';

export default function (state = false, action) {
  switch (action.type) {
    case SET_IMG:
      return action.payload;
    default:
      return state;
  }
}
