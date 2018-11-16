const config = {
  	title: '测试',
  	port: 8090, // 部署环境的默认接口
  	api: 'http://test.huayingbaolicai.com:8002/api/', // 外网测试环境     
  	mock: false,
	version : '1.0',
	server_domain : '/api/',
	app_key : 'uBCxvFblOWH60GfHPl9bdnnNcrp5vxzi',
	sign_type : 1,
	md5_key : 'cu89eMgDkGjo8HC6TzYt6jBqkEZGvHEJ',
	device_type : 4,
	device_id : 'd0ced7059fdb19f83c50d3b5fd831adf',
	login_page : '/login'
};
module.exports = config;

//如果访问地址与线上请求接口地址不同域，则需要判断测试环境接口url与线上环境接口url
//如果访问地址与线上请求接口地址同域，则只需要调测试环境地址