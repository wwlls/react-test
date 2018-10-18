import { GET_NOTICEMESSAGELIST } from '../actions';

let initstate = {
	total: 1,
	noticeMessages: [],
}

export const getNoticeMessageListData = (state = initstate, action) => {
	switch (action.type) {
	    case "test.GET_NOTICEMESSAGELIST":
	      	return  action.data
	    default:
	      	return state;
	}
}

export default getNoticeMessageListData;