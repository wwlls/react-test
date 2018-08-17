import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const Config = require('../../config');
const mockData = require('../data/mockData'); // 财富mock数据

const Utils = {
  mockAdapter: Config.mock ? new MockAdapter(axios) : '',
  /*
    mockStr: 用来模拟数据时，区分不同请求
  */
  getRequest(url, params= {}, mockStr = '') {
    const urlOrigin = url.split('api/')[1];
    if (Config.mock) {
      const urlCode = url.match(/-(\w*)/)[1];
      // 返回一个数组[status, data, headers]
      this.mockAdapter.onGet(url, { params }).reply(200, mockData[urlCode]);
    }
    params['action'] = urlOrigin;
    return axios.get(url, { params });
  },
  postRequest(url, data = {}) {
    // data['app_key'] = Config.app_key;
    // data['device_id'] = Config.device_id;
    // data['timestamp'] = new Date().getTime();
    // data['nonce'] = Utils.getRandomString(32);
    // data['version'] = Config.version;
    // data['sign'] = '89da27b22c7b3542d8b02497ab7bb1bc';
    // data['sign_type'] = Config.sign_type;
    // data['device_type'] = Config.device_type;
    // if (this.getCookie("ZSSESSIONID")) {
    //   data['access_token'] = this.getCookie("ZSSESSIONID");
    // }
    data = {access_token: "5cab30a0-04f4-44b4-a7c6-9937e6f5e833",
                          device_type: 3,
                          method: "login/checkMobile",
                          mobile: "13666666666",
                          nonce: "KNYpatKWHWdBErc5rzZywN8ant5wnR5E",
                          sign: "876dd88122e6a376cd0906b73c14b081",
                          sign_type: 1,
                          timestamp: 1533199781284,
                          version: "1.0"};
    if (Config.mock) {
      alert(1)
      const urlCode = url.match(/-(\w*)/)[1];
      console.log(urlCode)
      // 返回一个数组[status, data, headers]
      this.mockAdapter.onPost(url).reply(200, mockData[urlCode]);
    }

    return axios.post(url, data);
  },
  setStorage(key, value) {
    if (typeof value === 'object') {
      value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
  },
  // 存的0，取出来0,
  getStorage(key) {
    let value = localStorage.getItem(key);
    try {
      value = JSON.parse(localStorage.getItem(key));
    } catch (e) {
      console.log('this is not a object');
    }
    return value;
  },
  removeStorage(key) {
    localStorage.removeItem(key);
  },
  getRandomString(len = 32) {
  	/** **默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1*** */
  	const $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
  	const maxPos = $chars.length;
  	let pwd = '';
  	for (let i = 0; i < len; i++) {
  		pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
  	}
  	return pwd;
  },
  getCookie(name) {
  	var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  	if (arr = document.cookie.match(reg))
  		return unescape(arr[2]);
  	else
  		return null;
  }

};

export default Utils;
