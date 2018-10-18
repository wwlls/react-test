import { GET_COUNT } from '../actions';
let initstate = {
	investMoneyTotal: 0,
	registerCount: 0,
	totalProfit: 0,
	investCountTotal: 0,
	investMoney: 0,
	borrowingCount: 0,
	totalInterest: 0,
	borrowUserCountTotal: 0,
	borrowUserCount: 0,
	borrowingMoney: 0,
	borrowingTop1WMoney: 0,
	borrowingTop10WMoney: 0,
	investCount: 0,
	top1InvestMoney: 0,
	top10InvestMoney: 0,
}

export const getCountData = (state = initstate, action) => {
	switch (action.type) {
	    case "test.GET_COUNT":
	      	return  action.data
	    default:
	      	return state;
	}
}

export default getCountData;