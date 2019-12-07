import request from '@/utils/request'
import {baseApi} from '@/utils/base';

//当布到19的时候 前面有bmsrv  /v1/bm/user/login(dev)=>bmsrv/v1/bm/user/login(prod)

//登录api
export function loginNew(loginName, password,verifyCode) {
  return request({
    url: baseApi+'/v1/bm/user/login',
    method: 'post',
    data: {
      loginName,
      password,
      verifyCode, //验证码 暂时不需要
    }
  })
}

//注册api
export function registerNew(data){
  return request({
    url:baseApi+'/v1/bm/user/register',
    method: 'post',
    data, //需要的参数
  })
}

//注销api
export function logoutNew(){
  return request({
    url:baseApi+'/v1/bm/user/logout',
    method:'post',
  })
}



//拉取用户信息api
export function getInfoNew(token){

  return request({
    url: baseApi+'/v1/bm/user/only',
    method: 'post',
    data: {
      token, //获取用户信息需要的token
    }
  })
}



