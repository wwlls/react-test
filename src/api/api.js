const Api = {
	//当前登录用户信息
	customer_getInfo: 'customer/getInfo',

	//当前用户账户信息
	account_getInfo: 'account/getInfo',

	//平台数据
	asset_getCountTotal: 'asset/getCountTotal',

	//检查新老用户
	login_checkMobile: 'login/checkMobile',

	//验证码
	verifyCode_get: 'verifyCode/get',

	//注册
	register_normal: 'register/normal',

	//登录
	login_checkPasswd: 'login/checkPasswd',

	//忘记密码
	login_updatePasswd: 'login/updatePasswd',

	//产品列表
	product_getRegularListForOfficialSite: 'product/getRegularListForOfficialSite',

	//公司动态
	home_getNoticeMessageList: 'home/getNoticeMessageList',

	//公司动态详情
	home_getNoticeMessage: 'home/getNoticeMessage',

	//我的账户-我的资产
	asset_getRegularAssetList: 'asset/getRegularAssetList',

	//我的账户-账户充值
	recharge_getRechargeRecordList: 'recharge/getRechargeRecordList',

	//我的账户-资金流水
	asset_getAccountDetailList: 'asset/getAccountDetailList',

	//我的账户-我的赠券
	coupon_getMyCouponList: 'coupon/getMyCouponList',
};
export default Api;