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
    postRequest(action, data = {} , callFuc) {
        data['action'] = action;
        //mock数据
        if (Config.mock) {
            //match(/-(\w*)/)[1];  
            const urlCode = url;
          // 返回一个数组[status, data, headers]
            this.mockAdapter.onPost(url).reply(200, mockData[urlCode]);
        } else {
            data = this.setPublic(data);
            let accessToken = Utils.getStorage("ZZBSESSIONID");
            console.log(accessToken)
            if(action != 'token/get' && (accessToken == '' || accessToken == null || accessToken == undefined)) {
                let tokenData = {};
                tokenData['app_key'] = Config.app_key;
                tokenData['device_id'] = Config.device_id;
                let callFuc = function(res) {
                    let accessToken = JSON.parse(res.body).access_token;
                    console.log(accessToken)
                    Utils.setStorage("ZZBSESSIONID" , accessToken);
                }
                this.postRequest('token/get', tokenData, callFuc);
                return;
            }
            data['sign'] = Utils.createSign(data);
        }
        return axios.post(Config.api + action, data).then(function(res) {
            console.log(res)
            if (res.rtn_code == 1009) {// 未登录
                //localStorage.removeItem(key); 清除手机号
                window.location.href = Config.login_page;
                return;
            };
            if(res.rtn_code == 1002) {
                let tokenData = {};
                tokenData['app_key'] = Config.app_key;
                tokenData['device_id'] = Config.device_id;
                let callFuc = function(res) {
                    let accessToken = JSON.parse(res.body).access_token;
                    console.log(accessToken)
                    Utils.setStorage("ZZBSESSIONID" , accessToken);
                }
                Utils.postRequest('token/get', tokenData, callFuc);
                callFuc(res);
                return;
            }
            callFuc(res);
        });
    },

    //公用参数
    setPublic(data) {
        data['timestamp'] = new Date().getTime();
        data['nonce'] = Utils.getRandomString(32);
        data['version'] = Config.version;
        data['sign_type'] = Config.sign_type;
        data['device_type'] = Config.device_type;
        if (Utils.getStorage("ZZBSESSIONID")) {
            data['access_token'] = Utils.getStorage("ZZBSESSIONID");
        }
        return data;
    },

    //32位请求随机字符串，用于标识签名的唯一性
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
    //创建签名拼接
    createSign(params) {
        let data = "";
        let key;
        let arr = [];
        for(key in params) {
            arr.push(key);
            // data = data + key + "=" + value;
        }
        arr.sort();
        for (var i = 0; i < arr.length; i++) {
            let key = arr[i];
            var value = params[key];
            if (data != "")
            data = data + "&";
            data = data + key + "=" + encodeURIComponent(value);
        }
        data = data + "&key=" + Config.md5_key;
        let md5 = require('md5');
        return md5(data);
    },
    //储存书局 
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
        }
        return value;
    },
    removeStorage(key) {
        localStorage.removeItem(key);
    },
};

export default Utils;
