'use strict';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import md5 from 'md5';
import JsonP from 'jsonp';
import Api from 'api/api';
const Config = require('../../config');
import mockData from '../mock/mockData';    //mock数据

const Utils = {
    mockAdapter: Config.mock ? new MockAdapter(axios) : '',
    /*
    mockStr: 用来模拟数据时，区分不同请求
    */
    //第三方请求
    thirdRrquest(options) {
        return new Promise((resolve, reject) => {
            JsonP(options.url, {
                param: 'callback'
            }, (err, response) => {
                if (response.status == 'success') {
                    resolve(response);
                } else {
                    reject(response.messsage);
                }
            })
        })
    },
    //get请求
    getRequest(action, data= {}) {
        //const urlOrigin = action.split('api/')[1];
        if (Config.mock) {
            const urlCode = action.split('Api.')[1];
            console.log(urlCode)
            // 返回一个数组[status, data, headers]
            this.mockAdapter.onGet(action, { data }).reply(200, mockData[urlCode]);
        }
        data['action'] = action;
        return axios.get(action, { data });
    },
    //post请求
    postRequest(action, data = {}) {
        data['action'] = action;
        data = this.setPublic(data);
        data['sign'] = Utils.createSign(data);
        let loading = document.getElementById('ajaxLoading');
        loading.style.display = 'block';
        //mock数据
        if (Config.mock) {
            let loading = document.getElementById('ajaxLoading');
            loading.style.display = 'none';
            // const urlCode = action.split('Api.')[1];
            // console.log(urlCode)
            // 返回一个数组[status, data, headers]
            this.mockAdapter.onPost(action).reply(200, mockData[action]);
            return axios.post(action, { data });
        } else {
            //Utils.removeStorage("ZZBSESSIONID"); return;
            let accessToken = Utils.getStorage("ZZBSESSIONID");
            if(action != 'token/get' && (accessToken == '' || accessToken == null || accessToken == undefined)) {
                Utils.removeSession(); //清除本地数据
                let tokenData = {};
                tokenData['app_key'] = Config.app_key;
                tokenData['device_id'] = Config.device_id;
                Utils.postRequest(Api.token_get, tokenData).then((accessRes) => {
                    let loading = document.getElementById('ajaxLoading');
                    loading.style.display = 'none';
                    let accessToken = JSON.parse(accessRes.body).access_token;
                    Utils.setStorage("ZZBSESSIONID" , accessToken);
                });
            }
        }
        return new Promise((resolve,reject) => {
            axios.post(Config.api + action, data).then((res)=>{
                let loading = document.getElementById('ajaxLoading');
                loading.style.display = 'none';
                if (res.rtn_code == 1009) {// 未登录
                    Utils.removeSession(); //清除本地数据
                    window.location.href = Config.login_page;
                    return;
                };
                if(res.rtn_code == 1002) {// token未获取到
                    Utils.removeSession(); //清除本地数据
                    let tokenData = {};
                    tokenData['app_key'] = Config.app_key;
                    tokenData['device_id'] = Config.device_id;
                    Utils.postRequest(Api.token_get, tokenData).then((accessRes) => {
                        let accessToken = JSON.parse(accessRes.body).access_token;
                        Utils.setStorage("ZZBSESSIONID" , accessToken);

                        Utils.postRequest(action, data = {}).then(() => {//获取到token后再次请求接口
                            axios.post(Config.api + action, data).then((res)=>{
                                resolve(res);
                            })
                        })
                    });
                    return;
                }
                resolve(res);
                //Promise报错
                // if(res.rtn_code == 0) {
                //     resolve(res);
                // } else{
                //     reject(res);
                // }
            })
        })
    },
    // postRequest(action, data = {} , callFuc) {
    //     data['action'] = action;
    //     data = this.setPublic(data);
    //     data['sign'] = Utils.createSign(data);
    //     //mock数据
    //     if (Config.mock) {
    //         //match(/-(\w*)/)[1];  
    //         const urlCode = url;
    //       // 返回一个数组[status, data, headers]
    //         this.mockAdapter.onPost(url).reply(200, mockData[urlCode]);
    //     } else {
    //         // let accessToken = Utils.getStorage("ZZBSESSIONID");
    //         // if(action != 'token/get' && (accessToken == '' || accessToken == null || accessToken == undefined)) {
    //         //     Utils.removeSession(); //清除本地数据
    //         //     let tokenData = {};
    //         //     tokenData['app_key'] = Config.app_key;
    //         //     tokenData['device_id'] = Config.device_id;
    //         //     let callFuc1 = function(accessRes) {
    //         //         let accessToken = JSON.parse(accessRes.body).access_token;
    //         //         Utils.setStorage("ZZBSESSIONID" , accessToken);
    //         //         Utils.postRequest(action, data = {}, () => { //获取到token后再次请求接口
    //         //             return axios.post(Config.api + action, data).then((res) => {
    //         //                 callFuc(res);
    //         //             })
    //         //         })
    //         //     }
    //         //     this.postRequest('token/get', tokenData, callFuc1);
    //         //     return;
    //         // }
            
    //         let loading = document.getElementById('ajaxLoading');
    //         loading.style.display = 'block';
    //     }
    //     return axios.post(Config.api + action, data).then((res) => {
    //         let loading = document.getElementById('ajaxLoading');
    //         loading.style.display = 'none';
    //         if (res.rtn_code == 1009) {// 未登录
    //             Utils.removeSession(); //清除本地数据
    //             window.location.href = Config.login_page;
    //             return;
    //         };
    //         if(res.rtn_code == 1002) {// token未获取到
    //             Utils.removeSession(); //清除本地数据
    //             let tokenData = {};
    //             tokenData['app_key'] = Config.app_key;
    //             tokenData['device_id'] = Config.device_id;
    //             let callFuc1 = function(accessRes) {
    //                 let accessToken = JSON.parse(accessRes.body).access_token;
    //                 console.log(accessToken)
    //                 Utils.setStorage("ZZBSESSIONID" , accessToken);
    //                 Utils.postRequest(action, data = {}, () => { //获取到token后再次请求接口
    //                     return axios.post(Config.api + action, data).then((res) => {
    //                         callFuc(res);
    //                     })
    //                 })
    //             }
    //             Utils.postRequest('token/get', tokenData, callFuc1);
    //             return;
    //         }
    //         callFuc(res);
    //     });
    // },

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
            if(key != 'sign') {
                arr.push(key);
            }
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
        return md5(data);
    },
    //储存数据
    setStorage(key, value) {
        if (typeof value === 'object') {
            value = JSON.stringify(value);
        }
        localStorage.setItem(key, value);
    },
    // 获取数据
    getStorage(key) {
        let value = localStorage.getItem(key);
        try {
            value = JSON.parse(localStorage.getItem(key));
        } catch (e) {
        }
        return value;
    },
    // 删除数据
    removeStorage(key) {
        localStorage.removeItem(key);
    },
    //删除本地数据
    removeSession() {
        Utils.removeStorage('customerMobile');
        Utils.removeStorage('customerName');
        Utils.removeStorage('customerIdCard');
        Utils.removeStorage('customerBankCard');
    }
};

export default Utils;
