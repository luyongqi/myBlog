/*
 * @Author: 卢勇其
 * @Date: 2020-05-25 14:41:05
 * @LastEditors: your name
 * @LastEditTime: 2020-06-09 11:56:52
 */ 
import axios from 'axios';

// 全局设置
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

const instance = axios.create();
instance.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

axios.interceptors.request.use = instance.interceptors.request.use;

// request拦截器
instance.interceptors.request.use(
  config => {
    // 每次发送请求，检查 sessionStorage 中是否有 token,如果有放在headers中
    const userInfo = JSON.parse(window.sessionStorage.getItem('userInfo')) || {};
    const token =  userInfo.token || '';
    if( token !== '' ){
      config.headers.Authorization = token;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
)

// respone拦截器
instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    let { response } = error;
    if(response.status === 401) {
      // 清除缓存
      window.sessionStorage.removeItem('userInfo');
      window.location.href = "/login";
      return Promise.reject(error.response);
    }
  }
)

export default instance

