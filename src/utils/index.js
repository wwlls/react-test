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
    postRequest(url, data = {} , callback) {
        if (Config.mock) {
            //match(/-(\w*)/)[1];  
            const urlCode = url;
          // 返回一个数组[status, data, headers]
            this.mockAdapter.onPost(url).reply(200, mockData[urlCode]);
        }
        data = this.setPublic(data);
        let accessToken = this.getStorage("ZSSESSIONID");
        if(url != '/token/get' && (accessToken == '' || accessToken == null || accessToken == undefined)) {
            let tokenData = {};
            tokenData['app_key'] = Config.app_key;
            tokenData['device_id'] = Config.device_id;
            //tokenData = this.setPublic(tokenData);
            this.postRequest('/token/get', tokenData).then(function(res) {
                console.log(res)
                // if(res )
                // axios.post(url, data);
            })
            return;
        }
        data['sign'] = Utils.createSign(data);
        return axios.post(url, data ).then(function(res) {
            console.log(res)
            if(res) {
                let tokenData = {};
                tokenData['app_key'] = Config.app_key;
                tokenData['device_id'] = Config.device_id;
                tokenData = this.setPublic(tokenData);
                this.postRequest('/token/get', tokenData).then(function(res) {
                    console.log(res)
                    // if(res )
                    // axios.post(url, data);
                })
                return;
            }
            
            callback(res);
        });
    },

    setPublic(data) {
        data['timestamp'] = new Date().getTime();
        data['nonce'] = Utils.getRandomString(32);
        data['version'] = Config.version;
        data['sign_type'] = Config.sign_type;
        data['device_type'] = Config.device_type;
        if (this.getStorage("ZSSESSIONID")) {
            data['access_token'] = this.getStorage("ZSSESSIONID");
        }
        return data;
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

    createSign(params) {
        console.log(params)
        let data = "";
        let key;
        for(key in params) {
            var value = params[key]
            console.log(value)
            if (data != "")
            data = data + "&";
            data = data + key + "=" + encodeURIComponent(value);
            // data = data + key + "=" + value;
        }
        data = data + "&key=" + Config.md5_key;
        console.log(data)
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
            console.log('this is not a object');
        }
        return value;
    },
    removeStorage(key) {
        localStorage.removeItem(key);
    },
};

export default Utils;
