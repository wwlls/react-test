import React, { Component } from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
// import { Toast } from 'antd-mobile';
import { message } from 'antd';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import qs from 'qs';
import RouterMap from './router';
import reducers from './reducers';
import Config from '../config';
import Utils from './utils';
import './static/css/base.css'

// mock是本地模拟环境，Dev是本地开发环境
if (!Config.mock) {
  axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
}
axios.interceptors.request.use((axiosConfig) => {
  if (!Config.mock) {
    if (axiosConfig.method === 'get') {
      axiosConfig.data = qs.stringify(axiosConfig.data);
    }
  } else {
    if (axiosConfig.method === 'post') {
      axiosConfig.data = qs.stringify(axiosConfig.data);
    }
  }
  return axiosConfig;
}, (error) => {
  message.info('参数格式错误', 1);
  return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
  // 如果是模拟数据，直接返回data
  if (Config.mock) {
    return response.data;
  }
  //如果接口返回error_no不为0，就需要错误提示
  if (response.data.error_no && parseInt(response.data.error_no, 10) !== 0) {
    message.info(response.data.error_info, 2);
    return new Promise(() => {});
  }

  return response.data;
}, (error) => {
  message.info('参数格式错误', 1);
  return Promise.reject(error);
});

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
ReactDom.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <RouterMap />
  </Provider>,
  document.getElementById('root')
);
