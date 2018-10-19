import { GET_NOTICEMESSAGE } from '../actions';

let initstate = {
	noticeMessage: {
		title: '华赢宝公司动态标题',
		content: '华赢宝公司动态内容',
		createTime: new Date(new Date().getTime()),
	}
}

export const getNoticeMessageData = (state = initstate, action) => {
	switch (action.type) {
	    case "test.GET_NOTICEMESSAGE":
	      	return  action.data
	    default:
	      	return state;
	}
}

export default getNoticeMessageData;